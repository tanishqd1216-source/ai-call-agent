import { notFound } from "next/navigation";
import Link from "next/link";
import { requireSession } from "@/lib/auth";
import { getDepartmentAgents } from "@/lib/erp-api";
import { AgentCard } from "@/components/erp/AgentCard";

export default async function DepartmentAgentsPage({
  params,
}: {
  params: Promise<{ departmentId: string }>;
}) {
  const { departmentId } = await params;
  const session = await requireSession();
  const department = await getDepartmentAgents(session.token, departmentId);

  if (!department) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-4">
      <Link href="/erp" className="text-sm text-muted-foreground hover:text-foreground w-fit">
        ← Back to departments
      </Link>

      <div>
        <h1 className="text-xl font-semibold tracking-tight">{department.name}</h1>
        <p className="text-sm text-muted-foreground mt-0.5">Choose an agent to launch.</p>
      </div>

      {department.agents.length === 0 ? (
        <div className="rounded-xl border border-border bg-surface shadow-sm p-8 text-center text-muted-foreground">
          No agents configured for this department yet.
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {department.agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} departmentId={departmentId} />
          ))}
        </div>
      )}
    </div>
  );
}
