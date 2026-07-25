import { LoginForm } from "@/components/erp/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-xl border border-border bg-surface shadow-sm p-8">
        <div className="mb-6 text-center">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-semibold">
            V
          </span>
          <h1 className="mt-3 text-lg font-semibold tracking-tight">Sign in</h1>
          <p className="text-sm text-muted-foreground mt-1">Access your company&apos;s agent workspace.</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
