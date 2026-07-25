"use server";

import { redirect } from "next/navigation";
import { logout as apiLogout } from "@/lib/erp-api";
import { getSession, clearSessionCookie } from "@/lib/auth";

export async function logoutAction() {
  const session = await getSession();
  if (session) await apiLogout(session.token);
  await clearSessionCookie();
  redirect("/erp/login");
}
