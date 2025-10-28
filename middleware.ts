// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyAuthToken } from '@/shared/utils/verify-token';

const PUBLIC_PATHS = ['/'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_PATHS.some((path) => pathname === path)) {
    return NextResponse.next();
  }

  const token = request.cookies.get('token');

  console.log(request.cookies)

  if (!token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  try {
    const user = await verifyAuthToken(token);
    const response = NextResponse.next();
    response.headers.set('x-user-id', user.id);
    return response;
  } catch {
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: [
    '/home/home-page',
  ],
};
