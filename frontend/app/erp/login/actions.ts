"use server";

import { redirect } from "next/navigation";
import { login } from "@/lib/erp-api";
import { setSessionCookie } from "@/lib/auth";

export type LoginActionState = { error: string } | null;

export async function loginAction(
  _prevState: LoginActionState,
  formData: FormData,
): Promise<LoginActionState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { error: "Enter your email and password." };
  }

  const result = await login(email, password);
  if (!result.ok) {
    return { error: result.error };
  }

  await setSessionCookie(result.token);
  redirect("/erp");
}
