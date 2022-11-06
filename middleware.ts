import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server'

export default function middleware(req: NextRequest) {
  // get jwt token from local storage

  const { cookies } = req

  const user = cookies.get('user')

  const isLoggedIn = user != null

  const isProtectedRoute = req.nextUrl.pathname.includes('/dashboard')
  const onlyUnauthenticatedRoutes = ["/", "/login", "/register"]


  if(isProtectedRoute) {
    if (!isLoggedIn) return NextResponse.redirect(new URL('/login', req.url))
  } else {
    if (isLoggedIn) {
      if (onlyUnauthenticatedRoutes.includes(req.nextUrl.pathname)) {
        return NextResponse.redirect(new URL('/dashboard', req.url))
      }
    }
  }

}

// export const config = {
//   matcher: '/:path*',
// }