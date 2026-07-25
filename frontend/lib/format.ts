export function formatDuration(startedAt: string, endedAt: string | null): string {
  if (!endedAt) return "in progress";
  const seconds = Math.max(0, (new Date(endedAt).getTime() - new Date(startedAt).getTime()) / 1000);
  const minutes = Math.floor(seconds / 60);
  const remaining = Math.round(seconds % 60);
  return minutes > 0 ? `${minutes}m ${remaining}s` : `${remaining}s`;
}

export function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export function formatSeconds(value: number | null): string {
  if (value === null || value === undefined) return "—";
  return `${value.toFixed(2)}s`;
}
