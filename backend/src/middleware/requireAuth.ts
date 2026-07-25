import type { NextFunction, Request, Response } from "express";
import { getSessionByToken } from "../lib/sessions.js";

export async function requireAuth(req: Request, res: Response, next: NextFunction) {
  const header = req.header("authorization") ?? "";
  const [scheme, token] = header.split(" ");
  if (scheme !== "Bearer" || !token) {
    res.status(401).json({ error: "unauthenticated" });
    return;
  }

  const session = await getSessionByToken(token);
  if (!session) {
    res.status(401).json({ error: "unauthenticated" });
    return;
  }

  req.auth = { user: session.user, company: session.user.company };
  next();
}
