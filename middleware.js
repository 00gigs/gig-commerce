export const config = {
    matcher: [
      /*
       * Match the homepage and allow only authenticated users to access it
       */
      {
        source: '/',
        has: [{ type: 'header', key: 'cookie', value: 'session' }], // Check if the request has a session cookie
        missing: [{ type: 'header', key: 'cookie', value: 'session' }], // Redirect if the request does not have a session cookie
      },
    ],
  };
  