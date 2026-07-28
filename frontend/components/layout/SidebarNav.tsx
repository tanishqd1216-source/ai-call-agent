"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { DepartmentDetail } from "@/lib/erp-api";

export function SidebarNav({ departments }: { departments: DepartmentDetail[] }) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  const activeDepartmentId = useMemo(() => {
    const match = pathname.match(/^\/erp\/departments\/([^/]+)/);
    return match?.[1] ?? null;
  }, [pathname]);

  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedDept, setExpandedDept] = useState<string | null>(activeDepartmentId);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const callHistoryActive = pathname === "/calls-history" || pathname.startsWith("/calls-history/");

  return (
    <nav className="flex items-center gap-1">
      <div className="relative" ref={containerRef}>
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className={cn(
            "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
            menuOpen || activeDepartmentId
              ? "bg-sidebar-accent text-sidebar-foreground"
              : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground",
          )}
        >
          Departments
          <ChevronDown className={cn("h-4 w-4 transition-transform", menuOpen && "rotate-180")} />
        </button>

        {menuOpen && (
          <div className="absolute left-0 top-full z-50 mt-2 w-64 rounded-xl border border-sidebar-border bg-sidebar shadow-2xl py-2">
            {departments.map((department) => {
              const isExpanded = expandedDept === department.id;
              return (
                <div key={department.id} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => setExpandedDept(isExpanded ? null : department.id)}
                    className="flex items-center justify-between px-3 py-2 mx-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors"
                  >
                    <span>{department.name}</span>
                    <ChevronRight
                      className={cn("h-4 w-4 transition-transform", isExpanded && "rotate-90")}
                    />
                  </button>

                  {isExpanded && (
                    <div className="flex flex-col gap-1 pl-6 pr-2 pb-1">
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
            })}
          </div>
        )}
      </div>

      <Link
        href="/calls-history"
        className={cn(
          "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
          callHistoryActive
            ? "bg-sidebar-accent text-sidebar-foreground"
            : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground",
        )}
      >
        Call History
      </Link>
    </nav>
  );
}
