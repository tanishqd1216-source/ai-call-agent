import Link from "next/link";
import type { ErpSession } from "@/lib/auth";
import { logoutAction } from "@/app/erp/logout/actions";
import { SidebarNav } from "@/components/layout/SidebarNav";

export function Sidebar({ session }: { session: ErpSession | null }) {
  return (
    <aside className="w-64 shrink-0 border-r border-sidebar-border bg-sidebar text-sidebar-foreground flex flex-col fixed inset-y-0 left-0 hidden md:flex">
      <div className="flex items-center gap-3 px-5 py-5">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-semibold text-sm">
          V
        </span>
        <Link href="/erp" className="font-semibold tracking-tight text-sm">
          Vetic Voice Agent
        </Link>
      </div>

      <div className="flex-1 px-3">
        <SidebarNav />
      </div>

      {session && (
        <div className="border-t border-sidebar-border px-5 py-4 flex flex-col gap-2">
          <div>
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Company
            </div>
            <div className="text-sm font-semibold tracking-tight">{session.company.name}</div>
          </div>
          <div className="text-xs text-muted-foreground">
            {session.user.name ?? session.user.email}
          </div>
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
  );
}
