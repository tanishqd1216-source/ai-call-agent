import type { Company, User } from "../../generated/prisma/client.js";

declare global {
  namespace Express {
    interface Request {
      auth?: {
        user: User;
        company: Company;
      };
    }
  }
}

export {};
