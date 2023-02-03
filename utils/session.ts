import { cookies } from 'next/headers'

export const getSessionToken = () => {
  const nextCookies = cookies()
  return nextCookies.get('next-auth.session-token')?.value
}

export const isLoggedIn = () => {
  return !!getSessionToken()
}

export const setAuthorizationHeader = ({ headers = {} } = { headers: {} }) => {
  const token = getSessionToken()
  if (!token) throw new Error('No token found')
  return {
    headers:
    {
      ...headers,
      Authorization: `Bearer ${token}`
    }
  }
}

export default isLoggedIn
