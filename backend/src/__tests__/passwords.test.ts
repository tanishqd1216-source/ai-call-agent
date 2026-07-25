import { describe, it, expect } from "vitest";
import { hashPassword, verifyPassword } from "../lib/passwords.js";

describe("passwords", () => {
  it("verifies a correct password against its hash", async () => {
    const hash = await hashPassword("ChangeMe123!");
    expect(await verifyPassword("ChangeMe123!", hash)).toBe(true);
  });

  it("rejects an incorrect password against a hash", async () => {
    const hash = await hashPassword("ChangeMe123!");
    expect(await verifyPassword("wrong-password", hash)).toBe(false);
  });

  it("produces a hash that does not equal the plaintext", async () => {
    const hash = await hashPassword("ChangeMe123!");
    expect(hash).not.toBe("ChangeMe123!");
  });
});
