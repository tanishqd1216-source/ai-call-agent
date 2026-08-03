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
    <>
      {/* Mobile: top bar with hamburger + drawer, a vertical rail doesn't fit small screens */}
      <header className="flex md:hidden fixed top-0 inset-x-0 z-40 h-16 items-center gap-3 px-4 border-b border-sidebar-border bg-sidebar text-sidebar-foreground">
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
      </header>

      {/* Desktop: persistent vertical sidebar */}
      <aside className="hidden md:flex md:flex-col fixed inset-y-0 left-0 z-40 w-72 border-r border-sidebar-border bg-sidebar text-sidebar-foreground">
        <Link href="/erp" className="flex items-center gap-3 h-16 px-4 border-b border-sidebar-border shrink-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-semibold text-sm">
            M
          </span>
          <span className="font-semibold tracking-tight text-sm">Meridian</span>
        </Link>

        <div className="flex-1 overflow-y-auto px-3 py-4">
          <SidebarNav departments={departments} />
        </div>

        {session && (
          <div className="border-t border-sidebar-border p-4 shrink-0">
            <form action={logoutAction}>
              <button
                type="submit"
                className="w-full text-sm rounded-lg border border-sidebar-border px-3 py-1.5 hover:bg-sidebar-accent transition-colors"
              >
                Log out
              </button>
            </form>
          </div>
        )}
      </aside>
    </>
  );
}
