import { listCalls, getStats } from "@/lib/api";
import { StatCard } from "@/components/StatCard";
import { FilterBar } from "@/components/FilterBar";
import { CallsTable } from "@/components/CallsTable";

type SearchParams = Promise<{
  direction?: string;
  category?: string;
  resolution?: string;
  status?: string;
}>;

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const filters = await searchParams;
  const [callsResponse, stats] = await Promise.all([
    listCalls({ ...filters, limit: 50 }),
    getStats(),
  ]);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Call Summary</h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          Observability for every call the voice agent has handled.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatCard label="Total calls" value={String(stats.totalCalls)} />
        <StatCard
          label="Avg response latency"
          value={
            stats.avgResponseLatencySeconds != null
              ? `${stats.avgResponseLatencySeconds.toFixed(2)}s`
              : "—"
          }
        />
        <StatCard label="Total turns" value={String(stats.totalTurns)} />
        <StatCard
          label="Tokens (in / out)"
          value={`${stats.totalInputTokens} / ${stats.totalOutputTokens}`}
        />
      </div>

      <FilterBar filters={filters} />

      <CallsTable calls={callsResponse.calls} />

      <p className="text-sm text-muted-foreground">
        Showing {callsResponse.calls.length} of {callsResponse.total} calls. To place or monitor
        a live test call, use the existing{" "}
        <a
          href="/webcall"
          className="text-primary hover:text-primary-hover font-medium underline"
          target="_blank"
          rel="noreferrer"
        >
          webcall console
        </a>
        .
      </p>
    </div>
  );
}
