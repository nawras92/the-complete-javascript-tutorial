import { NextResponse } from 'next/server';

export async function middleware(request) {
  const tokenCookie = request.cookies.get(
    'lwn_nextjs_dashboard_logged_in_token'
  );
  // name , value
  const token = tokenCookie?.value;
  if (!token) {
    if (request.nextUrl.pathname.toLowerCase() === '/articles') {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    if (request.nextUrl.pathname.toLowerCase() === '/profile') {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    if (request.nextUrl.pathname.toLowerCase() === '/') {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    if (request.nextUrl.pathname.toLowerCase() === '/articles/new') {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    return NextResponse.next();
  }
  return NextResponse.next();
}
