"use client";

import { useActionState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { loginAction, type LoginActionState } from "@/app/erp/login/actions";

const initialState: LoginActionState = null;

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1 text-sm">
        <span className="font-medium text-muted-foreground">Email</span>
        <motion.input
          type="email"
          name="email"
          required
          autoComplete="username"
          whileFocus={{ scale: 1.02, boxShadow: "0 0 0 4px rgba(191, 128, 255, 0.25)" }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:border-primary"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        <span className="font-medium text-muted-foreground">Password</span>
        <motion.input
          type="password"
          name="password"
          required
          autoComplete="current-password"
          whileFocus={{ scale: 1.02, boxShadow: "0 0 0 4px rgba(191, 128, 255, 0.25)" }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:border-primary"
        />
      </label>

      <AnimatePresence>
        {state?.error && (
          <motion.p
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="text-sm text-status-error-fg bg-status-error-bg rounded-lg px-3 py-2 overflow-hidden"
          >
            {state.error}
          </motion.p>
        )}
      </AnimatePresence>

      <motion.button
        type="submit"
        disabled={isPending}
        whileHover={{ scale: isPending ? 1 : 1.03 }}
        whileTap={{ scale: isPending ? 1 : 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="rounded-lg bg-primary hover:bg-primary-hover transition-colors text-primary-foreground px-4 py-2 text-sm font-medium disabled:opacity-60"
      >
        {isPending ? "Signing in…" : "Sign in"}
      </motion.button>
    </form>
  );
}
