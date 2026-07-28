"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ErpSession } from "@/lib/auth";
import type { DepartmentDetail } from "@/lib/erp-api";
import { MARKETING_MENUS } from "@/lib/marketing-nav-data";
import { logoutAction } from "@/app/erp/logout/actions";

export function MobileNavDrawer({
  departments,
  session,
  showMarketingMenus = true,
  showBookDemo = true,
  showLogin = true,
}: {
  departments?: DepartmentDetail[];
  session?: ErpSession | null;
  showMarketingMenus?: boolean;
  showBookDemo?: boolean;
  showLogin?: boolean;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  useEffect(() => setOpen(false), [pathname]);

  function toggleSection(key: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  const callHistoryActive = pathname === "/calls-history" || pathname.startsWith("/calls-history/");

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-sidebar-border bg-sidebar text-sidebar-foreground md:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] flex flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-transform duration-200 md:hidden",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center gap-2 px-4 py-4 border-b border-sidebar-border shrink-0">
          <Zap className="h-5 w-5 text-primary" />
          <span className="text-lg font-bold tracking-tighter text-gradient-heading">Meridian</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="ml-auto text-muted-foreground hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-3">
          {departments && (
            <>
              <div className="px-3 pt-1 pb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Departments
              </div>
              {departments.map((department) => {
                const key = `dept-${department.id}`;
                const isExpanded = expanded.has(key);
                return (
                  <div key={department.id} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => toggleSection(key)}
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors"
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
              })}

              <Link
                href="/calls-history"
                className={cn(
                  "mt-1 block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  callHistoryActive
                    ? "bg-sidebar-accent text-sidebar-foreground"
                    : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground",
                )}
              >
                Call History
              </Link>

              <div className="my-3 h-px bg-sidebar-border" />
            </>
          )}

          {showMarketingMenus &&
            MARKETING_MENUS.map((menu) => {
              const key = `menu-${menu.label}`;
              const isExpanded = expanded.has(key);
              return (
                <div key={menu.label} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => toggleSection(key)}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors"
                  >
                    <span>{menu.label}</span>
                    <ChevronRight
                      className={cn("h-4 w-4 transition-transform", isExpanded && "rotate-90")}
                    />
                  </button>

                  {isExpanded && (
                    <div className="flex flex-col gap-1 pl-4 pb-1">
                      {menu.categories.map((category) => {
                        const catKey = `${key}-${category.name}`;
                        const catExpanded = expanded.has(catKey);
                        return (
                          <div key={category.name} className="flex flex-col">
                            <button
                              type="button"
                              onClick={() => toggleSection(catKey)}
                              className="flex items-center justify-between rounded-lg px-3 py-1.5 text-sm text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors"
                            >
                              <span>{category.name}</span>
                              <ChevronRight
                                className={cn(
                                  "h-3.5 w-3.5 transition-transform",
                                  catExpanded && "rotate-90",
                                )}
                              />
                            </button>
                            {catExpanded && (
                              <div className="flex flex-col gap-1 pl-4 pb-1">
                                {category.items.map((item) => {
                                  const name = typeof item === "string" ? item : item.name;
                                  const href = typeof item === "string" ? null : item.href;
                                  return href ? (
                                    <Link
                                      key={name}
                                      href={href}
                                      className="px-3 py-1 text-xs text-primary"
                                    >
                                      {name}
                                    </Link>
                                  ) : (
                                    <div key={name} className="px-3 py-1 text-xs text-muted-foreground">
                                      {name}
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
        </div>

        <div className="border-t border-sidebar-border p-4 flex flex-col gap-3 shrink-0">
          {showBookDemo && (
            <>
              {showLogin && (
                <Link
                  href="/erp/login"
                  className="w-full text-center rounded-lg border border-sidebar-border px-4 py-2 text-sm font-medium hover:bg-sidebar-accent transition-colors"
                >
                  Login
                </Link>
              )}
              <Link
                href="/book-demo"
                className="w-full text-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-hover transition-colors"
              >
                Book Demo
              </Link>
            </>
          )}

          {session && (
            <>
              <div>
                <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">
                  Company
                </div>
                <div className="text-sm font-semibold tracking-tight">{session.company.name}</div>
              </div>
              <form action={logoutAction}>
                <button
                  type="submit"
                  className="w-full text-sm rounded-lg border border-sidebar-border px-3 py-1.5 hover:bg-sidebar-accent transition-colors"
                >
                  Log out
                </button>
              </form>
            </>
          )}
        </div>
      </aside>
    </>
  );
}
