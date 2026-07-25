import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const STYLES: Record<string, string> = {
  in_progress: "bg-status-in-progress-bg text-status-in-progress-fg",
  ended: "bg-status-ended-bg text-status-ended-fg",
  error: "bg-status-error-bg text-status-error-fg",
};

export function StatusBadge({ status }: { status: string }) {
  const style = STYLES[status] ?? "bg-muted text-muted-foreground";
  return (
    <Badge variant="secondary" className={cn(style)}>
      {status.replace("_", " ")}
    </Badge>
  );
}
