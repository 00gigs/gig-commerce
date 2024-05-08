// middleware.js

import { getSession } from 'next-auth/react';
import { NextResponse } from 'next/server';

// Middleware function to check if user is authenticated
export async function requireAuth(request) {
  // Get the user session
  const session = await getSession({ req: request });

  // If user is authenticated, allow the request to proceed
  if (session) {
    return null; // Allow the request to proceed
  }

  // If user is not authenticated, redirect to the login page or show an error message
  return NextResponse.redirect(new URL('/Login', request.url));
}
