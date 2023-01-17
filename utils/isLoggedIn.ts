import { cookies } from 'next/headers'

export const isLoggedIn = () => {
  const nextCookies = cookies()
  return !!nextCookies.get('next-auth.session-token')?.value
}

export default isLoggedIn
