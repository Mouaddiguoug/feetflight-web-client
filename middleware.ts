// middleware.js
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  // 1. Define the current path the user is trying to access
  const pathname = url.pathname;

  // 2. Define the target path
  const WAITLIST_PATH = '/waitlist';

  // 3. Check if the user is trying to access the root path '/'
  // AND ensure they are not already on the waitlist page to prevent infinite redirects.
 
    // Modify the URL to point to the waitlist page
    url.pathname = WAITLIST_PATH;
    
    // Redirect the user to the new URL
    return NextResponse.redirect(url);
}

// 4. Configure which paths the middleware should run on
// This pattern tells Next.js to only run the middleware for the root path ('/')
export const config = {
  matcher: ['/', '/signup'],
};