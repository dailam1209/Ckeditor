import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authRoutes, protectedRoutes, publicRoutes } from "@/router";
import { jwtDecode } from "jwt-decode";
interface JwtPayload {
  exp: number; 
}


export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get(`${process.env.NEXT_PUBLIC_TOKEN}`)?.value;
  const currentTime = Math.floor(Date.now() / 1000);
  if (
    protectedRoutes.includes(request.nextUrl.pathname) &&
    (!currentUser || currentTime > jwtDecode<JwtPayload>(currentUser).exp)
  ) {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete(`${process.env.NEXT_PUBLIC_TOKEN}`);
    return response;
  }

  if (authRoutes.includes(request.nextUrl.pathname) && !currentUser) {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete(`${process.env.NEXT_PUBLIC_TOKEN}`);
    return response;
  }
  if (publicRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  } 
}