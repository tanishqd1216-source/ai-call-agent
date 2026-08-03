import { notFound } from "next/navigation";
import Link from "next/link";
import { requireSession } from "@/lib/auth";
import { getDepartmentAgents } from "@/lib/erp-api";
import { getDepartmentDescription } from "@/lib/department-marketing-copy";
import { LaunchFrame } from "@/components/erp/LaunchFrame";

export default async function AgentLaunchPage({
  params,
}: {
  params: Promise<{ departmentId: string; agentId: string }>;
}) {
  const { departmentId, agentId } = await params;
  const session = await requireSession();
  const department = await getDepartmentAgents(session.token, departmentId);
  const agent = department?.agents.find((a) => a.id === agentId);

  if (!department || !agent) {
    notFound();
  }

  return (
    // Breaks out of the shell layout's padded/max-width <main> so the console
    // fills the entire viewport below the (fixed) top nav bar.
    <LaunchFrame>
      <div className="flex items-center gap-3 border-b border-border bg-surface px-4 py-3 shrink-0">
        <Link
          href="/erp"
          aria-label={`Back to ${department.name}`}
          title={`Back to ${department.name}`}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
        >
          ←
        </Link>
        <div className="min-w-0">
          <h1 className="text-sm font-semibold leading-tight">{agent.name}</h1>
          <p className="truncate text-xs text-muted-foreground">
            {getDepartmentDescription(department.slug)}
          </p>
        </div>
      </div>

      {/* Same-origin path, proxied to WEBCALL_URL by next.config.ts's rewrites —
          avoids opening a new tab and avoids the mixed-content block an HTTPS
          tunnel would hit embedding a raw http:// URL directly. */}
      <iframe
        src={agent.launchUrl ?? "/webcall"}
        title={agent.name}
        allow="microphone; autoplay"
        className="w-full flex-1 border-0"
      />
    </LaunchFrame>
  );
}
