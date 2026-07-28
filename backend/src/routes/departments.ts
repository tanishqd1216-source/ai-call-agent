import { Router } from "express";
import { prisma } from "../lib/prisma.js";
import { logger } from "../lib/logger.js";
import { requireAuth } from "../middleware/requireAuth.js";

export const departmentsRouter = Router();

departmentsRouter.use(requireAuth);

departmentsRouter.get("/departments", async (_req, res) => {
  try {
    const departments = await prisma.department.findMany({
      orderBy: { sortOrder: "asc" },
      include: { _count: { select: { agents: true } } },
    });
    res.json(
      departments.map((d) => ({
        id: d.id,
        name: d.name,
        slug: d.slug,
        description: d.description,
        agentCount: d._count.agents,
      })),
    );
  } catch (err) {
    logger.error({ err }, "failed to list departments");
    res.status(500).json({ error: "failed to list departments" });
  }
});

departmentsRouter.get("/departments/:id/agents", async (req, res) => {
  try {
    const department = await prisma.department.findUnique({
      where: { id: req.params.id },
      include: { agents: { orderBy: { sortOrder: "asc" } } },
    });
    if (!department) {
      return res.status(404).json({ error: "department not found" });
    }

    res.json({
      id: department.id,
      name: department.name,
      slug: department.slug,
      agents: department.agents.map((a) => ({
        id: a.id,
        name: a.name,
        description: a.description,
        launchUrl: a.launchUrl,
      })),
    });
  } catch (err) {
    logger.error({ err, departmentId: req.params.id }, "failed to load department agents");
    res.status(500).json({ error: "failed to load department agents" });
  }
});
