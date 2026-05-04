import { NextResponse } from "next/server";

export function middleware(request) {
  const sessionToken =
    request.cookies.get("better-auth.session_token")?.value ||
    request.cookies.get("__Secure-better-auth.session_token")?.value ||
    request.cookies.get("better-auth.session_token.0")?.value;

  const { pathname } = request.nextUrl;

  const protectedRoutes = ["/my-profile", "/update-profile"];
  const isProtectedCourse = pathname.startsWith("/courses/");
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if ((isProtectedRoute || isProtectedCourse) && !sessionToken) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/courses/:path*", "/my-profile", "/update-profile"],
};