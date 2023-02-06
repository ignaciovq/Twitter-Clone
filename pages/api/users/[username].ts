import { NextApiRequest, NextApiResponse } from 'next'
import { getToken, JWT } from 'next-auth/jwt'
import { fetchAPI } from '../../../services/twitterAPIv2'

let lastCache = new Date(0)
let cache: { user: unknown } = { user: {} }

export default async function timeline (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const username = <string>req.query?.username || ''
  if (!req.cookies['next-auth.session-token'] && !req.headers.authorization) { return res.status(401).json({ error: 'Unauthorized. No session data or JWT token in request.' }) }
  if (Date.now() - lastCache.getTime() < 1000 * 12) { return res.status(200).json(cache) }
  const secret = process.env.NEXTAUTH_SECRET
  try {
    const token = await getToken({
      req,
      secret
    }) as JWT
    const { data: [user] } = await fetchAPI({ endpoint: 'users', token, additionalParams: { username } })
    lastCache = new Date()
    cache = { user }
    res.status(200).json({ user })
  } catch (err) {
    const { message } = err as Error
    res.status(401).json({ error: message })
  }
}
