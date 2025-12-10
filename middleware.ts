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

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(req: NextRequest) {
//   const token = req.cookies.get("Authorization");

//   // Allow access to "/" (where login & signup are)
//   if (req.nextUrl.pathname === "/") {
//     return NextResponse.next();
//   }

//   // If no token → block and redirect back to "/"
//   if (!token) {
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   // Allow request if token exists
//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/((?!api|static|.*\\..*|_next|favicon.ico).*)",
//   ],
// };
