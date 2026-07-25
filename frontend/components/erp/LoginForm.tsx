"use client";

import { useActionState } from "react";
import { loginAction, type LoginActionState } from "@/app/erp/login/actions";

const initialState: LoginActionState = null;

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1 text-sm">
        <span className="font-medium text-muted-foreground">Email</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="username"
          className="rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        <span className="font-medium text-muted-foreground">Password</span>
        <input
          type="password"
          name="password"
          required
          autoComplete="current-password"
          className="rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
        />
      </label>

      {state?.error && (
        <p className="text-sm text-status-error-fg bg-status-error-bg rounded-lg px-3 py-2">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="rounded-lg bg-primary hover:bg-primary-hover transition-colors text-primary-foreground px-4 py-2 text-sm font-medium disabled:opacity-60"
      >
        {isPending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
