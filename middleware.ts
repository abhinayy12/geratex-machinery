import { NextRequest, NextResponse } from "next/server";

const supportedLocales = ["en", "de", "pt"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasSupportedLocale = supportedLocales.some(
    (locale) =>
      pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasSupportedLocale) {
    return NextResponse.next();
  }

  // Ignore Next.js files, API routes, and static assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};