import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { AetherFlowHero } from "@/components/erp/AetherFlowHero";
import { LoginForm } from "@/components/erp/LoginForm";
import { MarketingHeader } from "@/components/layout/MarketingHeader";

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
    </>
  );
}
