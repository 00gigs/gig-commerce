// middleware.js

import { NextResponse } from 'next/server';

// Middleware function to redirect authenticated users to homepage
export async function redirectAuthenticatedToHomepage(request) {
  // Check if user is authenticated
  const session = await getSession({ req: request });

  // If user is authenticated, redirect to the homepage
  if (session) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // If user is not authenticated, allow the request to proceed
  return null;
}
