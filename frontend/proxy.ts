import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SESSION_COOKIE = "erp_session";

// Routes that hold customer/company data and require a logged-in session.
// Marketing pages (industries, capabilities, use-cases, etc.) stay public.
const PROTECTED_PREFIXES = ["/erp", "/calls-history"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasSession = request.cookies.has(SESSION_COOKIE);

  // The app's front door: if already signed in, go straight to the
  // dashboard; otherwise this is also where the login form lives (see
  // app/page.tsx), so there's nothing further to gate here.
  if (pathname === "/") {
    if (hasSession) return NextResponse.redirect(new URL("/erp", request.url));
    return NextResponse.next();
  }

  const isProtected = PROTECTED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );

  // Any protected URL opened without a session bounces to the front door
  // (not a separate /erp/login path) so there's a single, consistent place
  // an unauthenticated visitor ever lands on.
  if (isProtected && !hasSession) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/erp", "/erp/:path*", "/calls-history", "/calls-history/:path*"],
};
