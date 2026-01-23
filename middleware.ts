import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Completely allow ONLY /waitlist and Next.js internal assets
  const isWaitlist = pathname.startsWith('/waitlist') ;
  const isNextAsset = pathname.startsWith('/_next');
  const isStatic = pathname.startsWith('/assets');
  const isFavicon = pathname === '/favicon.ico';

  if (isWaitlist || isNextAsset || isStatic || isFavicon) {
    return NextResponse.next();
  }

  // Everything else → redirect to /waitlist
  const url = req.nextUrl.clone();
  url.pathname = '/waitlist';
  return NextResponse.redirect(url);
}
