const { NextResponse } = require('next/server');
const { getSession } = require('next-auth/react');

module.exports = async (request) => {
    const session = await getSession({ req: request });

    // Check if there is an active session
    if (session) {
        // Redirect authenticated users to the homepage
        return NextResponse.redirect('/');
    }

    // If there is no active session, allow the request to proceed
    return null;
};

