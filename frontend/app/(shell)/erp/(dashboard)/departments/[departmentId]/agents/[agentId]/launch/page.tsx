import { notFound } from "next/navigation";
import Link from "next/link";
import { requireSession } from "@/lib/auth";
import { getDepartmentAgents } from "@/lib/erp-api";

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
    <div className="flex flex-col gap-4">
      <Link
        href={`/erp/departments/${departmentId}`}
        className="text-sm text-muted-foreground hover:text-foreground w-fit"
      >
        ← Back to {department.name}
      </Link>

      <h1 className="text-xl font-semibold tracking-tight">{agent.name}</h1>

      {/* Same-origin path, proxied to WEBCALL_URL by next.config.ts's rewrites —
          avoids opening a new tab and avoids the mixed-content block an HTTPS
          tunnel would hit embedding a raw http:// URL directly. */}
      <iframe
        src="/webcall"
        title={agent.name}
        allow="microphone; autoplay"
        className="w-full h-[75vh] rounded-xl border border-border bg-surface shadow-sm"
      />
    </div>
  );
}
