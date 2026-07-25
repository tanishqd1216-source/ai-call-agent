import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import { logger } from "../lib/logger.js";

export const callsRouter = Router();

const listQuerySchema = z.object({
  direction: z.enum(["inbound", "outbound"]).optional(),
  category: z.string().optional(),
  resolution: z.string().optional(),
  status: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(200).default(50),
  offset: z.coerce.number().int().min(0).default(0),
});

callsRouter.get("/calls", async (req, res) => {
  const parsed = listQuerySchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json({ error: "invalid query", issues: parsed.error.issues });
  }
  const { direction, category, resolution, status, limit, offset } = parsed.data;

  try {
    const [calls, total] = await Promise.all([
      prisma.call.findMany({
        where: { direction, category, resolution, status },
        orderBy: { startedAt: "desc" },
        take: limit,
        skip: offset,
      }),
      prisma.call.count({ where: { direction, category, resolution, status } }),
    ]);
    res.json({ calls, total, limit, offset });
  } catch (err) {
    logger.error({ err }, "failed to list calls");
    res.status(500).json({ error: "failed to list calls" });
  }
});

callsRouter.get("/calls/stats", async (_req, res) => {
  try {
    const [totalCalls, byDirection, byResolution, turnAgg] = await Promise.all([
      prisma.call.count(),
      prisma.call.groupBy({ by: ["direction"], _count: true }),
      prisma.call.groupBy({ by: ["resolution"], _count: true }),
      prisma.callTurn.aggregate({
        _avg: { responseLatencySeconds: true },
        _sum: { inputTokens: true, outputTokens: true },
        _count: true,
      }),
    ]);

    res.json({
      totalCalls,
      byDirection,
      byResolution,
      avgResponseLatencySeconds: turnAgg._avg.responseLatencySeconds,
      totalTurns: turnAgg._count,
      totalInputTokens: turnAgg._sum.inputTokens ?? 0,
      totalOutputTokens: turnAgg._sum.outputTokens ?? 0,
    });
  } catch (err) {
    logger.error({ err }, "failed to compute call stats");
    res.status(500).json({ error: "failed to compute stats" });
  }
});

callsRouter.get("/calls/:callId", async (req, res) => {
  try {
    const call = await prisma.call.findUnique({
      where: { callId: req.params.callId },
      include: {
        turns: { orderBy: { turn: "asc" } },
        events: { orderBy: { createdAt: "asc" } },
      },
    });
    if (!call) {
      return res.status(404).json({ error: "call not found" });
    }
    res.json(call);
  } catch (err) {
    logger.error({ err, callId: req.params.callId }, "failed to load call detail");
    res.status(500).json({ error: "failed to load call" });
  }
});
