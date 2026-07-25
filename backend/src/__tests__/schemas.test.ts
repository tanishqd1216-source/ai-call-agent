import { describe, it, expect } from "vitest";
import { eventIngestionSchema, turnPayloadSchema, callFieldsSchema } from "../lib/schemas.js";

describe("eventIngestionSchema", () => {
  it("accepts a well-formed call_started event", () => {
    const result = eventIngestionSchema.safeParse({
      callId: "web-call-abc123",
      direction: "inbound",
      eventType: "call_started",
      payload: { owner: "Priya", pet: "Milo" },
    });
    expect(result.success).toBe(true);
  });

  it("rejects an unknown direction", () => {
    const result = eventIngestionSchema.safeParse({
      callId: "web-call-abc123",
      direction: "sideways",
      eventType: "call_started",
    });
    expect(result.success).toBe(false);
  });

  it("rejects a missing callId", () => {
    const result = eventIngestionSchema.safeParse({
      direction: "outbound",
      eventType: "call_ended",
    });
    expect(result.success).toBe(false);
  });

  it("defaults payload to an empty object when omitted", () => {
    const result = eventIngestionSchema.parse({
      callId: "web-call-abc123",
      direction: "outbound",
      eventType: "error",
    });
    expect(result.payload).toEqual({});
  });
});

describe("turnPayloadSchema", () => {
  it("requires a non-negative integer turn number", () => {
    expect(turnPayloadSchema.safeParse({ turn: -1 }).success).toBe(false);
    expect(turnPayloadSchema.safeParse({ turn: 1.5 }).success).toBe(false);
    expect(turnPayloadSchema.safeParse({ turn: 0 }).success).toBe(true);
  });

  it("allows all latency/token fields to be omitted", () => {
    const result = turnPayloadSchema.safeParse({ turn: 3 });
    expect(result.success).toBe(true);
  });
});

describe("callFieldsSchema", () => {
  it("accepts a partial subset of known fields", () => {
    const result = callFieldsSchema.safeParse({ category: "OPD", resolution: "escalated" });
    expect(result.success).toBe(true);
  });

  it("ignores unknown extra keys rather than failing (loose payload passthrough)", () => {
    const result = callFieldsSchema.safeParse({ category: "OPD", notAField: 123 });
    expect(result.success).toBe(true);
  });
});
