import { Router } from "express";
import { prisma } from "../lib/prisma.js";
import { logger } from "../lib/logger.js";
import { loginSchema } from "../lib/schemas.js";
import { verifyPassword } from "../lib/passwords.js";
import { createSession, deleteSession } from "../lib/sessions.js";
import { requireAuth } from "../middleware/requireAuth.js";

export const authRouter = Router();

authRouter.post("/auth/login", async (req, res) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "invalid input", issues: parsed.error.issues });
  }
  const { email, password } = parsed.data;

  try {
    const user = await prisma.user.findUnique({ where: { email }, include: { company: true } });
    const valid = user ? await verifyPassword(password, user.passwordHash) : false;
    if (!user || !valid) {
      return res.status(401).json({ error: "invalid credentials" });
    }

    const { token } = await createSession(user.id);
    res.json({
      token,
      user: { id: user.id, email: user.email, name: user.name },
      company: { id: user.company.id, name: user.company.name },
    });
  } catch (err) {
    logger.error({ err }, "login failed");
    res.status(500).json({ error: "login failed" });
  }
});

authRouter.post("/auth/logout", requireAuth, async (req, res) => {
  try {
    const header = req.header("authorization") ?? "";
    const token = header.split(" ")[1];
    if (token) await deleteSession(token);
    res.status(204).end();
  } catch (err) {
    logger.error({ err }, "logout failed");
    res.status(500).json({ error: "logout failed" });
  }
});

authRouter.get("/auth/me", requireAuth, (req, res) => {
  const { user, company } = req.auth!;
  res.json({
    user: { id: user.id, email: user.email, name: user.name },
    company: { id: company.id, name: company.name },
  });
});
