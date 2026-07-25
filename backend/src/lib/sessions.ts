import { randomBytes } from "node:crypto";
import { prisma } from "./prisma.js";

const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000;

export async function createSession(userId: string): Promise<{ token: string; expiresAt: Date }> {
  const token = randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS);
  await prisma.session.create({ data: { token, userId, expiresAt } });
  return { token, expiresAt };
}

export async function getSessionByToken(token: string) {
  const session = await prisma.session.findUnique({
    where: { token },
    include: { user: { include: { company: true } } },
  });
  if (!session || session.expiresAt < new Date()) return null;
  return session;
}

export async function deleteSession(token: string): Promise<void> {
  await prisma.session.deleteMany({ where: { token } });
}
