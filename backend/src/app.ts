import express from "express";
import cors from "cors";
import { logger } from "./lib/logger.js";
import { eventsRouter } from "./routes/events.js";
import { callsRouter } from "./routes/calls.js";
import { authRouter } from "./routes/auth.js";
import { departmentsRouter } from "./routes/departments.js";
import { integrationsRouter } from "./routes/integrations.js";

const allowedOrigins = (process.env.ALLOWED_ORIGINS ?? "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

export function createApp() {
  const app = express();

  app.use(
    cors({
      origin: allowedOrigins.length ? allowedOrigins : false,
      allowedHeaders: ["Content-Type", "Authorization"],
    }),
  );
  app.use(express.json());

  app.use((req, _res, next) => {
    logger.info({ method: req.method, path: req.path }, "request");
    next();
  });

  app.get("/health", (_req, res) => res.json({ ok: true }));

  app.use("/api", eventsRouter);
  app.use("/api", callsRouter);
  app.use("/api", authRouter);
  app.use("/api", departmentsRouter);
  app.use("/api", integrationsRouter);

  app.use(
    (err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
      logger.error({ err }, "unhandled error");
      res.status(500).json({ error: "internal server error" });
    },
  );

  return app;
}
