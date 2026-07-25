import { AetherFlowHero } from "@/components/erp/AetherFlowHero";
import { LoginForm } from "@/components/erp/LoginForm";

export default function LoginPage() {
  return (
    <AetherFlowHero
      eyebrow="Vetic Voice Agent"
      title="Sign in to your workspace"
      subtitle="Access your company's calling agents and call history in one place."
    >
      <div className="w-full max-w-sm mx-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl p-8">
        <LoginForm />
      </div>
    </AetherFlowHero>
  );
}
