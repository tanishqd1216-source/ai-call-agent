import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { AetherFlowHero } from "@/components/erp/AetherFlowHero";
import { LoginForm } from "@/components/erp/LoginForm";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { FeatureCarousel } from "@/components/erp/FeatureCarousel";
import { UseCasesGrid } from "@/components/marketing/UseCasesGrid";
import { AmbientGlow } from "@/components/marketing/AmbientGlow";

export default async function RootPage() {
  const session = await getSession();
  if (session) redirect("/erp");

  return (
    <>
      <MarketingHeader showLogin={false} />
      <AetherFlowHero
        title="Sign in to your workspace"
        subtitle="Access your company's calling agents and call history in one place."
      >
        <div className="w-full max-w-sm mx-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl p-8">
          <LoginForm />
        </div>
      </AetherFlowHero>

      {/* overflow-x-hidden only (not the overflow-hidden shorthand) — the
          glow blobs bleed past the section's left/right edges and just
          need horizontal clipping. Clipping the y-axis too breaks
          FeatureCarousel's internal position:sticky scroll-jack, since any
          ancestor with overflow other than visible on either axis moves
          sticky's containing scrollport off the real viewport. */}
      <section className="relative overflow-x-hidden px-4 pb-24">
        <AmbientGlow className="-top-20 -left-32 h-[420px] w-[420px]" />
        <AmbientGlow className="top-40 -right-32 h-[380px] w-[380px]" />
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gradient-heading">
              AI agents built for every stage of the conversation
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-400">
              From the first hello to the final follow-up — Meridian&apos;s agents carry the
              conversation, assist your team in real time, and turn every call into a
              data-backed action.
            </p>
          </div>
          <FeatureCarousel />
        </div>
      </section>

      <UseCasesGrid />

      <MarketingFooter />
    </>
  );
}
