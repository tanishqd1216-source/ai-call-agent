import type { Agent } from "@/lib/erp-api";

export function AgentCard({ agent }: { agent: Agent }) {
  return (
    <div className="rounded-xl border border-border bg-surface shadow-sm p-4 flex items-center justify-between gap-4">
      <div>
        <h3 className="font-medium">{agent.name}</h3>
        {agent.description && <p className="text-sm text-muted-foreground mt-0.5">{agent.description}</p>}
      </div>
      <a
        href={agent.launchUrl}
        target="_blank"
        rel="noreferrer"
        className="shrink-0 rounded-lg bg-primary hover:bg-primary-hover transition-colors text-primary-foreground px-4 py-2 text-sm font-medium"
      >
        Launch
      </a>
    </div>
  );
}
