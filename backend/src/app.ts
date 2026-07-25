import express from "express";
import cors from "cors";
import { logger } from "./lib/logger.js";
import { eventsRouter } from "./routes/events.js";
import { callsRouter } from "./routes/calls.js";

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use((req, _res, next) => {
    logger.info({ method: req.method, path: req.path }, "request");
    next();
  });

  app.get("/health", (_req, res) => res.json({ ok: true }));

  app.use("/api", eventsRouter);
  app.use("/api", callsRouter);

  app.use(
    (err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
      logger.error({ err }, "unhandled error");
      res.status(500).json({ error: "internal server error" });
    },
  );

  return app;
}
