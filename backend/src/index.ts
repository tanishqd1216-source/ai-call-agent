import "dotenv/config";
import { createApp } from "./app.js";
import { logger } from "./lib/logger.js";

const app = createApp();
const port = Number(process.env.PORT ?? 4000);

app.listen(port, () => {
  logger.info({ port }, "backend listening");
});
