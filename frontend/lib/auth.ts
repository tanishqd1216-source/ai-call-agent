import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getMe, type ErpCompany, type ErpUser } from "@/lib/erp-api";

const SESSION_COOKIE = "erp_session";
const SESSION_MAX_AGE_SECONDS = 7 * 24 * 60 * 60;

export type ErpSession = {
  token: string;
  user: ErpUser;
  company: ErpCompany;
};

export async function getSession(): Promise<ErpSession | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  const me = await getMe(token);
  if (!me) return null;

  return { token, user: me.user, company: me.company };
}

export async function requireSession(): Promise<ErpSession> {
  const session = await getSession();
  if (!session) redirect("/");
  return session;
}

export async function setSessionCookie(token: string): Promise<void> {
  const store = await cookies();
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
}

export async function clearSessionCookie(): Promise<void> {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}
