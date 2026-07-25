import Link from "next/link";
import type { CallSummary } from "@/lib/api";
import { formatDateTime, formatDuration } from "@/lib/format";
import { StatusBadge } from "./StatusBadge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function CallsTable({ calls }: { calls: CallSummary[] }) {
  if (calls.length === 0) {
    return (
      <div className="rounded-xl bg-card p-8 text-center text-muted-foreground ring-1 ring-foreground/10">
        No calls match these filters yet.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="text-muted-foreground">Started</TableHead>
            <TableHead className="text-muted-foreground">Direction</TableHead>
            <TableHead className="text-muted-foreground">Status</TableHead>
            <TableHead className="text-muted-foreground">Category</TableHead>
            <TableHead className="text-muted-foreground">Resolution</TableHead>
            <TableHead className="text-muted-foreground">Owner / Pet</TableHead>
            <TableHead className="text-muted-foreground">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {calls.map((call) => (
            <TableRow key={call.callId}>
              <TableCell>
                <Link
                  href={`/calls-history/${encodeURIComponent(call.callId)}`}
                  className="font-medium text-primary hover:text-primary-hover"
                >
                  {formatDateTime(call.startedAt)}
                </Link>
              </TableCell>
              <TableCell className="capitalize">{call.direction}</TableCell>
              <TableCell>
                <StatusBadge status={call.status} />
              </TableCell>
              <TableCell>{call.category ?? "—"}</TableCell>
              <TableCell>{call.resolution ?? "—"}</TableCell>
              <TableCell>
                {call.owner ?? "—"}
                {call.pet ? ` / ${call.pet}` : ""}
              </TableCell>
              <TableCell>{formatDuration(call.startedAt, call.endedAt)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
