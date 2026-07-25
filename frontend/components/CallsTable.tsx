import Link from "next/link";
import type { CallSummary } from "@/lib/api";
import { formatDateTime, formatDuration } from "@/lib/format";
import { StatusBadge } from "./StatusBadge";

export function CallsTable({ calls }: { calls: CallSummary[] }) {
  if (calls.length === 0) {
    return (
      <div className="rounded-lg border border-black/10 dark:border-white/15 p-8 text-center text-black/60 dark:text-white/60">
        No calls match these filters yet.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-black/10 dark:border-white/15">
      <table className="w-full text-sm text-left">
        <thead className="bg-black/5 dark:bg-white/5">
          <tr>
            <th className="px-3 py-2 font-medium">Started</th>
            <th className="px-3 py-2 font-medium">Direction</th>
            <th className="px-3 py-2 font-medium">Status</th>
            <th className="px-3 py-2 font-medium">Category</th>
            <th className="px-3 py-2 font-medium">Resolution</th>
            <th className="px-3 py-2 font-medium">Owner / Pet</th>
            <th className="px-3 py-2 font-medium">Duration</th>
          </tr>
        </thead>
        <tbody>
          {calls.map((call) => (
            <tr
              key={call.callId}
              className="border-t border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5"
            >
              <td className="px-3 py-2 whitespace-nowrap">
                <Link href={`/calls/${encodeURIComponent(call.callId)}`} className="underline">
                  {formatDateTime(call.startedAt)}
                </Link>
              </td>
              <td className="px-3 py-2 capitalize">{call.direction}</td>
              <td className="px-3 py-2">
                <StatusBadge status={call.status} />
              </td>
              <td className="px-3 py-2">{call.category ?? "—"}</td>
              <td className="px-3 py-2">{call.resolution ?? "—"}</td>
              <td className="px-3 py-2">
                {call.owner ?? "—"}
                {call.pet ? ` / ${call.pet}` : ""}
              </td>
              <td className="px-3 py-2 whitespace-nowrap">
                {formatDuration(call.startedAt, call.endedAt)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
