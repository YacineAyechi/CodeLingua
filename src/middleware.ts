import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/convert", "/profile"];
const unprotectedRoutes = ["/"];

import { auth } from "./auth";

export default async function middleware(request: NextRequest) {
  const session = await auth();

  const isProtectedRoute = protectedRoutes.some((prefix) =>
    request.nextUrl.pathname.startsWith(prefix)
  );

  if (!session && isProtectedRoute) {
    const absoluteURL = new URL("/", request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
