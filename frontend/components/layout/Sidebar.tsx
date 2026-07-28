import Link from "next/link";
import type { ErpSession } from "@/lib/auth";
import type { DepartmentDetail } from "@/lib/erp-api";
import { logoutAction } from "@/app/erp/logout/actions";
import { SidebarNav } from "@/components/layout/SidebarNav";
import { MobileNavDrawer } from "@/components/layout/MobileNavDrawer";

export function Sidebar({
  session,
  departments,
}: {
  session: ErpSession | null;
  departments: DepartmentDetail[];
}) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 h-16 border-b border-sidebar-border bg-sidebar text-sidebar-foreground">
      {/* Mobile: hamburger + drawer, horizontal bar doesn't fit this content on small screens */}
      <div className="flex md:hidden h-full items-center gap-3 px-4">
        <MobileNavDrawer
          departments={departments}
          session={session}
          showMarketingMenus={false}
          showBookDemo={false}
        />
        <Link href="/erp" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-semibold text-sm">
            M
          </span>
          <span className="font-semibold tracking-tight text-sm">Meridian</span>
        </Link>
      </div>

      {/* Desktop: full horizontal bar */}
      <div className="hidden md:flex h-full px-4 md:px-6 items-center gap-3 md:gap-4">
        <Link href="/erp" className="flex items-center gap-3 shrink-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-semibold text-sm">
            M
          </span>
          <span className="font-semibold tracking-tight text-sm">Meridian</span>
        </Link>

        {session && (
          <>
            <div className="h-6 w-px bg-sidebar-border shrink-0" />
            <div className="shrink-0 leading-tight">
              <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">
                Company
              </div>
              <div className="text-lg font-bold tracking-tight">{session.company.name}</div>
            </div>
          </>
        )}

        <SidebarNav departments={departments} />

        <div className="ml-auto flex items-center gap-3 shrink-0">
          {session && (
            <form action={logoutAction}>
              <button
                type="submit"
                className="text-sm rounded-lg border border-sidebar-border px-3 py-1.5 hover:bg-sidebar-accent transition-colors whitespace-nowrap"
              >
                Log out
              </button>
            </form>
          )}
        </div>
      </div>
    </header>
  );
}
