import Link from "next/link";
import type { Department } from "@/lib/erp-api";

export function DepartmentTile({ department }: { department: Department }) {
  return (
    <Link
      href={`/erp/departments/${department.id}`}
      className="group rounded-xl border border-border bg-surface shadow-sm p-5 flex flex-col gap-2 hover:border-primary hover:shadow-md transition-all"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-semibold tracking-tight">{department.name}</h2>
        <span className="text-muted-foreground group-hover:text-primary transition-colors">→</span>
      </div>
      {department.description && (
        <p className="text-sm text-muted-foreground">{department.description}</p>
      )}
      <p className="text-sm text-muted-foreground">
        {department.agentCount} agent{department.agentCount === 1 ? "" : "s"} available
      </p>
    </Link>
  );
}
