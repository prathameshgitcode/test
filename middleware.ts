

import { NextRequest, NextResponse } from 'next/server';
import  {refreshToken}  from './lib/actions/auth.actions';
import { getSession } from 'next-auth/react';

export const middleware = async (request: NextRequest) => {
    const session = getSession()
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const authCookie = request.cookies.get('next-auth.session-token');
    console.log(authCookie, 'aa');
    
    if (!authCookie) return NextResponse.redirect(new URL('/signin', request.url));


    // const refToken =  refreshToken(session?.user.data.access_token);
    // console.log(refToken, "rT");
    
  }
}; 















// import { NextRequest, NextResponse } from 'next/server';

// export const middleware = async (request: NextRequest) => {
//   if (request.nextUrl.pathname.startsWith('/dashboard')) {
//     const authCookie = request.cookies.get('next-auth.session-token');
//     console.log(authCookie, 'aa');
    
//     if (!authCookie) return NextResponse.redirect(new URL('/signin', request.url));
//   }
// }; import { NextRequest, NextResponse } from 'next/server';
// import { logout } from './lib/actions/auth.actions';

// interface RequestCookie {
//   value: string;
// }

// export const middleware = async (request: NextRequest) => {
//   if (request.nextUrl.pathname.startsWith('/dashboard')) {
//     const authCookie: RequestCookie | undefined = request.cookies.get('next-auth.session-token');
//     console.log(authCookie, 'aa');
    
//     if (!authCookie) {
//       return NextResponse.redirect(new URL('/signin', request.url));
//     } else {
//       const cookieValue: string = authCookie.value; // Get the value of the cookie
//       const cookieParts: string[] = cookieValue.split(';'); // Split the value by ';'
//       const expiresPart: string | undefined = cookieParts.find(part => part.trim().startsWith('Expires='));
//       if (expiresPart) {
//         const expiresString: string = expiresPart.trim().split('=')[1];
//         const expiresTimestamp: number = Date.parse(expiresString);
//         const currentTime: number = new Date().getTime();
//         if (expiresTimestamp <= currentTime) {
//           await logout(); 
//           return NextResponse.redirect(new URL('/signin', request.url));
//         }
//       }
//     }
//   }
// };
