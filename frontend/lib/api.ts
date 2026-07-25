export type CallSummary = {
  id: string;
  callId: string;
  direction: string;
  status: string;
  phase: string | null;
  category: string | null;
  resolution: string | null;
  owner: string | null;
  pet: string | null;
  service: string | null;
  clinic: string | null;
  city: string | null;
  startedAt: string;
  endedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CallTurn = {
  id: string;
  callId: string;
  turn: number;
  speechId: string | null;
  eouDelaySeconds: number | null;
  transcriptionDelaySeconds: number | null;
  llmTtftSeconds: number | null;
  ttsTtfbSeconds: number | null;
  responseLatencySeconds: number | null;
  inputTokens: number | null;
  outputTokens: number | null;
  createdAt: string;
};

export type CallEvent = {
  id: string;
  callId: string;
  eventType: string;
  payload: string | null;
  createdAt: string;
};

export type CallDetail = CallSummary & {
  turns: CallTurn[];
  events: CallEvent[];
};

export type CallsListResponse = {
  calls: CallSummary[];
  total: number;
  limit: number;
  offset: number;
};

export type CallStats = {
  totalCalls: number;
  byDirection: { direction: string; _count: number }[];
  byResolution: { resolution: string | null; _count: number }[];
  avgResponseLatencySeconds: number | null;
  totalTurns: number;
  totalInputTokens: number;
  totalOutputTokens: number;
};

export type CallListFilters = {
  direction?: string;
  category?: string;
  resolution?: string;
  status?: string;
  limit?: number;
  offset?: number;
};

export function apiBaseUrl(): string {
  return process.env.API_BASE_URL ?? "http://localhost:4000";
}

async function apiFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${apiBaseUrl()}${path}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`API request to ${path} failed with status ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export function listCalls(filters: CallListFilters = {}): Promise<CallsListResponse> {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(filters)) {
    if (value !== undefined && value !== "") {
      params.set(key, String(value));
    }
  }
  const query = params.toString();
  return apiFetch<CallsListResponse>(`/api/calls${query ? `?${query}` : ""}`);
}

export function getCall(callId: string): Promise<CallDetail | null> {
  return fetch(`${apiBaseUrl()}/api/calls/${encodeURIComponent(callId)}`, {
    cache: "no-store",
  }).then(async (res) => {
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`API request for call ${callId} failed with status ${res.status}`);
    return res.json() as Promise<CallDetail>;
  });
}

export function getStats(): Promise<CallStats> {
  return apiFetch<CallStats>("/api/calls/stats");
}
