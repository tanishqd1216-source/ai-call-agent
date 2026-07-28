import { notFound } from "next/navigation";
import Link from "next/link";
import { getCall } from "@/lib/api";
import { StatusBadge } from "@/components/StatusBadge";
import { formatDateTime, formatDuration, formatSeconds } from "@/lib/format";

export default async function CallDetailPage({
  params,
}: {
  params: Promise<{ callId: string }>;
}) {
  const { callId } = await params;
  const call = await getCall(callId);

  if (!call) {
    notFound();
  }

  const timeline = [
    ...call.turns.map((t) => ({ kind: "turn" as const, at: t.createdAt, data: t })),
    ...call.events.map((e) => ({ kind: "event" as const, at: e.createdAt, data: e })),
  ].sort((a, b) => new Date(a.at).getTime() - new Date(b.at).getTime());

  return (
    <div className="flex flex-col gap-6">
      <Link
        href="/calls-history"
        className="text-sm text-muted-foreground hover:text-foreground w-fit flex items-center gap-1"
      >
        ← Back to call history
      </Link>

      <div className="rounded-xl border border-border bg-surface ring-1 ring-white/5 p-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Field label="Call ID" value={call.callId} />
        <Field label="Direction" value={call.direction} />
        <Field label="Status" value={<StatusBadge status={call.status} />} />
        <Field label="Duration" value={formatDuration(call.startedAt, call.endedAt)} />
        <Field label="Owner" value={call.owner ?? "—"} />
        <Field label="Pet" value={call.pet ?? "—"} />
        <Field label="Category" value={call.category ?? "—"} />
        <Field label="Resolution" value={call.resolution ?? "—"} />
      </div>

      <div>
        <h2 className="font-semibold tracking-tight mb-2">Timeline</h2>
        {timeline.length === 0 ? (
          <div className="rounded-xl border border-border bg-surface ring-1 ring-white/5 p-6 text-center text-muted-foreground">
            No turns or events recorded for this call yet.
          </div>
        ) : (
          <ol className="flex flex-col gap-2">
            {timeline.map((item) => (
              <li
                key={`${item.kind}-${item.data.id}`}
                className="rounded-xl border border-border bg-surface ring-1 ring-white/5 p-3 text-sm"
              >
                <div className="flex justify-between text-muted-foreground mb-1">
                  <span>{formatDateTime(item.at)}</span>
                  <span className="font-mono">
                    {item.kind === "turn" ? `turn ${item.data.turn}` : item.data.eventType}
                  </span>
                </div>
                {item.kind === "turn" ? (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                    <span>EOU {formatSeconds(item.data.eouDelaySeconds)}</span>
                    <span>STT {formatSeconds(item.data.transcriptionDelaySeconds)}</span>
                    <span>LLM {formatSeconds(item.data.llmTtftSeconds)}</span>
                    <span>TTS {formatSeconds(item.data.ttsTtfbSeconds)}</span>
                    <span>Response {formatSeconds(item.data.responseLatencySeconds)}</span>
                    <span>
                      Tokens {item.data.inputTokens ?? "—"} / {item.data.outputTokens ?? "—"}
                    </span>
                  </div>
                ) : (
                  <pre className="whitespace-pre-wrap break-words font-mono text-xs text-muted-foreground">
                    {item.data.payload}
                  </pre>
                )}
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );
}
