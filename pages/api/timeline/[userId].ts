import { NextApiRequest, NextApiResponse } from 'next'
import { getToken, JWT } from 'next-auth/jwt'
import { fetchAPI } from '../../../services/twitterAPIv2'

let lastCache = new Date(0)
let cache: { timeline: unknown, pagination: unknown } = { timeline: [], pagination: {} }

export default async function timeline (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.cookies['next-auth.session-token'] && !req.headers.authorization) { return res.status(401).json({ error: 'Unauthorized. No credentials data or JWT in request.' }) }
  if (Date.now() - lastCache.getTime() < 1000 * 5) { return res.status(200).json(cache) }
  const secret = process.env.NEXTAUTH_SECRET
  try {
    const token = await getToken({
      req,
      secret
    }) as JWT
    const userId = <string>req.query?.userId
    const paginationToken = <string>req.query?.pagination || ''
    const [timeline, pagination] = await fetchAPI({ endpoint: 'timeline', token, additionalParams: { userId, paginationToken } })
    lastCache = new Date()
    cache = { timeline, pagination }
    res.status(200).json({ timeline, pagination })
  } catch (err) {
    const { message } = err as Error
    res.status(401).json({ error: message })
  }
}
