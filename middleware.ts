// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyAuthToken } from '@/shared/utils/verify-token';

const PUBLIC_PATHS = ['/'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  console.log(request.cookies)
  const token = request.cookies.get('token');

  if (PUBLIC_PATHS.some((path) => pathname === path)) {
    return NextResponse.next();
  }
  
  NextResponse.next();
}

export const config = {
  matcher: [
    '/home/home-page',
  ],
};
