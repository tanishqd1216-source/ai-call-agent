import { Router } from "express";
import { prisma } from "../lib/prisma.js";
import { logger } from "../lib/logger.js";
import {
  eventIngestionSchema,
  callFieldsSchema,
  turnPayloadSchema,
} from "../lib/schemas.js";

export const eventsRouter = Router();

async function ensureCall(callId: string, direction: string) {
  return prisma.call.upsert({
    where: { callId },
    update: {},
    create: { callId, direction },
  });
}

eventsRouter.post("/events", async (req, res) => {
  const parsed = eventIngestionSchema.safeParse(req.body);
  if (!parsed.success) {
    logger.warn({ issues: parsed.error.issues }, "rejected malformed call event");
    return res.status(400).json({ error: "invalid event", issues: parsed.error.issues });
  }

  const { callId, direction, eventType, timestamp, payload } = parsed.data;
  const at = timestamp ? new Date(timestamp) : new Date();

  try {
    await ensureCall(callId, direction);

    switch (eventType) {
      case "call_started": {
        const fields = callFieldsSchema.parse(payload);
        await prisma.call.update({
          where: { callId },
          data: { ...fields, status: "in_progress", startedAt: at },
        });
        await prisma.callEvent.create({
          data: { callId, eventType, payload: JSON.stringify(payload) },
        });
        break;
      }
      case "turn": {
        const turn = turnPayloadSchema.parse(payload);
        await prisma.callTurn.create({
          data: { callId, ...turn },
        });
        break;
      }
      case "phase_change": {
        const fields = callFieldsSchema.parse(payload);
        await prisma.call.update({ where: { callId }, data: fields });
        await prisma.callEvent.create({
          data: { callId, eventType, payload: JSON.stringify(payload) },
        });
        break;
      }
      case "call_ended": {
        const fields = callFieldsSchema.parse(payload);
        await prisma.call.update({
          where: { callId },
          data: { ...fields, status: "ended", endedAt: at },
        });
        await prisma.callEvent.create({
          data: { callId, eventType, payload: JSON.stringify(payload) },
        });
        break;
      }
      case "error": {
        await prisma.callEvent.create({
          data: { callId, eventType, payload: JSON.stringify(payload) },
        });
        if (payload.fatal === true) {
          await prisma.call.update({ where: { callId }, data: { status: "error" } });
        }
        break;
      }
    }

    res.status(202).json({ ok: true });
  } catch (err) {
    logger.error({ err, callId, eventType }, "failed to persist call event");
    res.status(500).json({ error: "failed to persist event" });
  }
});
