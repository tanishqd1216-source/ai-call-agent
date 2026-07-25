import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SESSION_COOKIE = "erp_session";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // The app's front door: send bare visits straight into the ERP flow, which
  // then routes to login or the department dashboard depending on session
  // state. app/page.tsx also redirects to /erp as a defense-in-depth fallback
  // in case this proxy rule is ever bypassed.
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/erp", request.url));
  }

  const hasSession = request.cookies.has(SESSION_COOKIE);

  if (pathname === "/erp/login") {
    if (hasSession) return NextResponse.redirect(new URL("/erp", request.url));
    return NextResponse.next();
  }

  if (!hasSession) return NextResponse.redirect(new URL("/erp/login", request.url));
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/erp", "/erp/:path*"],
};
