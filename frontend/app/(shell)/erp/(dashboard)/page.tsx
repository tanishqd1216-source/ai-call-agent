import { requireSession } from "@/lib/auth";
import { FeatureCarousel } from "@/components/erp/FeatureCarousel";

export default async function ErpDashboardPage() {
  await requireSession();

  return (
    // Breaks out of the shell layout's `max-w-6xl mx-auto` (1152px) so this
    // page can be wider, but caps it well short of full-bleed — just a
    // moderately roomier column, still centered.
    <div className="relative left-1/2 right-1/2 w-screen -mx-[50vw] px-4 md:px-6">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl border border-border bg-surface ring-1 ring-white/5 shadow-2xl p-8 md:p-12">
            <h1 className="text-xl font-semibold tracking-tight mb-1">Welcome</h1>
            <p className="text-sm text-muted-foreground">
              Pick a department from the sidebar to see its agents and launch a console.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface ring-1 ring-white/5 shadow-2xl p-8 md:p-12 overflow-hidden">
            <FeatureCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}
