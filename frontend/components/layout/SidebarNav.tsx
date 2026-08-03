"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { Building2, ChevronDown, ChevronRight, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";
import type { DepartmentDetail } from "@/lib/erp-api";

export function SidebarNav({ departments }: { departments: DepartmentDetail[] }) {
  const pathname = usePathname();

  const activeDepartmentId = useMemo(() => {
    const match = pathname.match(/^\/erp\/departments\/([^/]+)/);
    return match?.[1] ?? null;
  }, [pathname]);

  const [departmentsOpen, setDepartmentsOpen] = useState(true);
  const [expandedDept, setExpandedDept] = useState<string | null>(activeDepartmentId);

  const callHistoryActive = pathname === "/calls-history" || pathname.startsWith("/calls-history/");

  return (
    <nav className="flex flex-col gap-1">
      <button
        type="button"
        onClick={() => setDepartmentsOpen((o) => !o)}
        className={cn(
          "flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
          departmentsOpen || activeDepartmentId
            ? "bg-sidebar-accent text-sidebar-foreground"
            : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground",
        )}
      >
        <span className="flex items-center gap-2">
          <Building2 className="h-4 w-4" />
          Departments
        </span>
        <ChevronDown className={cn("h-4 w-4 transition-transform", departmentsOpen && "rotate-180")} />
      </button>

      {departmentsOpen && (
        <div className="flex flex-col gap-1 pl-4">
          {departments.length === 0 ? (
            <span className="px-3 py-1.5 text-xs text-muted-foreground">No departments yet</span>
          ) : (
            departments.map((department) => {
              const isExpanded = expandedDept === department.id;

              // A department with exactly one agent has nothing to choose between —
              // clicking it goes straight to that agent's launch console instead of
              // expanding a one-item list first.
              if (department.agents.length === 1) {
                const agent = department.agents[0];
                const href = `/erp/departments/${department.id}/agents/${agent.id}/launch`;
                const active = pathname === href;
                return (
                  <Link
                    key={department.id}
                    href={href}
                    className={cn(
                      "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                      active
                        ? "bg-sidebar-accent text-sidebar-foreground"
                        : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground",
                    )}
                  >
                    {department.name}
                  </Link>
                );
              }

              return (
                <div key={department.id} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => setExpandedDept(isExpanded ? null : department.id)}
                    className="flex items-center justify-between rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors"
                  >
                    <span>{department.name}</span>
                    <ChevronRight
                      className={cn("h-4 w-4 transition-transform", isExpanded && "rotate-90")}
                    />
                  </button>

                  {isExpanded && (
                    <div className="flex flex-col gap-1 pl-4 pb-1">
                      {department.agents.length === 0 ? (
                        <span className="px-3 py-1 text-xs text-muted-foreground">No agents yet</span>
                      ) : (
                        department.agents.map((agent) => {
                          const href = `/erp/departments/${department.id}/agents/${agent.id}/launch`;
                          const active = pathname === href;
                          return (
                            <Link
                              key={agent.id}
                              href={href}
                              className={cn(
                                "rounded-lg px-3 py-1.5 text-sm transition-colors",
                                active
                                  ? "bg-sidebar-accent text-sidebar-foreground font-medium"
                                  : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground",
                              )}
                            >
                              {agent.name}
                            </Link>
                          );
                        })
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}

      <Link
        href="/calls-history"
        className={cn(
          "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
          callHistoryActive
            ? "bg-sidebar-accent text-sidebar-foreground"
            : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground",
        )}
      >
        <PhoneCall className="h-4 w-4" />
        Call Summary
      </Link>
    </nav>
  );
}
