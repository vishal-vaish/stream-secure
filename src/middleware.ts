import {NextRequest, NextResponse} from "next/server";

const publicRoutes = ["/login"];

export function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl;

  const isPublicRoute = publicRoutes.some(route =>
    pathname === route || pathname.startsWith(`${route}/`)
  );

  if (isPublicRoute) {
    return NextResponse.next();
  }

  const authToken = request.cookies.get("auth_token")?.value;

  if(authToken !== "true") {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next|api/auth|static|favicon.ico).*)',
  ],
};