import { Router } from "express";
import { prisma } from "../lib/prisma.js";
import { logger } from "../lib/logger.js";
import { requireAuth } from "../middleware/requireAuth.js";
import { encrypt, decrypt } from "../lib/crypto.js";
import { createIntegrationSchema, updateIntegrationSchema } from "../lib/schemas.js";

export const integrationsRouter = Router();

function serialize(integration: {
  id: string;
  name: string;
  kind: string;
  provider: string;
  serverUrl: string;
  transport: string;
  authToken: string | null;
  allowedTools: string[];
  enabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}) {
  const { authToken, ...rest } = integration;
  return { ...rest, authTokenSet: authToken !== null };
}

integrationsRouter.use("/integrations", requireAuth);

integrationsRouter.get("/integrations", async (req, res) => {
  try {
    const integrations = await prisma.integration.findMany({
      where: { companyId: req.auth!.company.id },
      orderBy: { createdAt: "asc" },
    });
    res.json(integrations.map(serialize));
  } catch (err) {
    logger.error({ err }, "failed to list integrations");
    res.status(500).json({ error: "failed to list integrations" });
  }
});

integrationsRouter.post("/integrations", async (req, res) => {
  const parsed = createIntegrationSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "invalid integration payload", details: parsed.error.issues });
  }
  try {
    const { authToken, ...fields } = parsed.data;
    const integration = await prisma.integration.create({
      data: {
        ...fields,
        companyId: req.auth!.company.id,
        authToken: authToken ? encrypt(authToken) : null,
      },
    });
    res.status(201).json(serialize(integration));
  } catch (err) {
    logger.error({ err }, "failed to create integration");
    res.status(500).json({ error: "failed to create integration" });
  }
});

integrationsRouter.patch("/integrations/:id", async (req, res) => {
  const parsed = updateIntegrationSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "invalid integration payload", details: parsed.error.issues });
  }
  try {
    const existing = await prisma.integration.findUnique({ where: { id: req.params.id } });
    if (!existing || existing.companyId !== req.auth!.company.id) {
      return res.status(404).json({ error: "integration not found" });
    }
    const { authToken, ...fields } = parsed.data;
    const integration = await prisma.integration.update({
      where: { id: req.params.id },
      data: {
        ...fields,
        ...(authToken !== undefined ? { authToken: authToken ? encrypt(authToken) : null } : {}),
      },
    });
    res.json(serialize(integration));
  } catch (err) {
    logger.error({ err, integrationId: req.params.id }, "failed to update integration");
    res.status(500).json({ error: "failed to update integration" });
  }
});

integrationsRouter.delete("/integrations/:id", async (req, res) => {
  try {
    const existing = await prisma.integration.findUnique({ where: { id: req.params.id } });
    if (!existing || existing.companyId !== req.auth!.company.id) {
      return res.status(404).json({ error: "integration not found" });
    }
    await prisma.integration.delete({ where: { id: req.params.id } });
    res.status(204).end();
  } catch (err) {
    logger.error({ err, integrationId: req.params.id }, "failed to delete integration");
    res.status(500).json({ error: "failed to delete integration" });
  }
});

// Service-to-service only — called by the livekit_agent Python process at
// call time, not by a logged-in browser session. Gated by a shared secret
// instead of requireAuth since there is no user session on that side.
integrationsRouter.get("/internal/integrations", async (req, res) => {
  const key = req.header("x-internal-api-key");
  if (!key || key !== process.env.INTERNAL_API_KEY) {
    return res.status(401).json({ error: "unauthenticated" });
  }
  const companyId = req.query.companyId;
  if (typeof companyId !== "string" || !companyId) {
    return res.status(400).json({ error: "companyId is required" });
  }
  try {
    const integrations = await prisma.integration.findMany({
      where: { companyId, enabled: true },
    });
    res.json(
      integrations.map((i) => ({
        id: i.id,
        name: i.name,
        kind: i.kind,
        provider: i.provider,
        serverUrl: i.serverUrl,
        transport: i.transport,
        authToken: i.authToken ? decrypt(i.authToken) : null,
        allowedTools: i.allowedTools,
      })),
    );
  } catch (err) {
    logger.error({ err, companyId }, "failed to load internal integrations");
    res.status(500).json({ error: "failed to load internal integrations" });
  }
});
