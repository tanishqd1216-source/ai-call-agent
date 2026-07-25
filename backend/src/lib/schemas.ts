import { z } from "zod";

// Payload fields that map directly onto Call scalar columns. Sent by
// call_started/phase_change/call_ended events from event_reporter.py as
// whichever subset is known at that point in the call.
export const callFieldsSchema = z
  .object({
    phase: z.string().optional(),
    category: z.string().optional(),
    resolution: z.string().optional(),
    owner: z.string().optional(),
    pet: z.string().optional(),
    service: z.string().optional(),
    clinic: z.string().optional(),
    city: z.string().optional(),
  })
  .partial();

export const turnPayloadSchema = z.object({
  turn: z.number().int().nonnegative(),
  speechId: z.string().optional(),
  eouDelaySeconds: z.number().optional(),
  transcriptionDelaySeconds: z.number().optional(),
  llmTtftSeconds: z.number().optional(),
  ttsTtfbSeconds: z.number().optional(),
  responseLatencySeconds: z.number().optional(),
  inputTokens: z.number().int().optional(),
  outputTokens: z.number().int().optional(),
});

export const eventIngestionSchema = z.object({
  callId: z.string().min(1),
  direction: z.enum(["inbound", "outbound"]),
  eventType: z.enum([
    "call_started",
    "turn",
    "phase_change",
    "call_ended",
    "error",
  ]),
  timestamp: z.string().datetime().optional(),
  payload: z.record(z.string(), z.unknown()).optional().default({}),
});

export type EventIngestionInput = z.infer<typeof eventIngestionSchema>;
