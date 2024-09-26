// import { headers } from "next/headers";
// import { NextResponse } from "next/server";

// export const config = {
//     matcher: [
//       '/Login',
//       '/'
//     ],
//   };

//   export function middleware(request){
//     const {pathname} = request.nextUrl;
//     const cookie = request.headers.get('cookie');
//     const hasSession = cookie && cookie.includes('session');


//     if(!hasSession && pathname !== '/Login'){
// return NextResponse.redirect(new URL('/Login', request.url))
//     };

//     if(hasSession && pathname === '/Login'){
// return NextResponse.next()
//     };

// return NextResponse.next()
//   }

  
