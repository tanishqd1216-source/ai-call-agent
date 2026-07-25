import { requireSession } from "@/lib/auth";
import { logoutAction } from "@/app/erp/logout/actions";

export default async function ErpDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await requireSession();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between rounded-xl border border-border bg-surface shadow-sm px-5 py-4">
        <div>
          <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Company</div>
          <div className="text-lg font-semibold tracking-tight">{session.company.name}</div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground hidden sm:inline">
            {session.user.name ?? session.user.email}
          </span>
          <form action={logoutAction}>
            <button
              type="submit"
              className="text-sm rounded-lg border border-border px-3 py-1.5 hover:bg-background transition-colors"
            >
              Log out
            </button>
          </form>
        </div>
      </div>
      {children}
    </div>
  );
}
