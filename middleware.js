import { NextResponse } from "next/server";

export function middleware(request) {
  const sessionToken =
    request.cookies.get("better-auth.session_token")?.value ||
    request.cookies.get("__Secure-better-auth.session_token")?.value;

  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/courses/") && !sessionToken) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (pathname.startsWith("/my-profile") && !sessionToken) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (pathname.startsWith("/update-profile") && !sessionToken) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/courses/:path*", "/my-profile", "/update-profile"],
};