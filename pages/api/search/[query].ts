import { NextApiRequest, NextApiResponse } from 'next'
import { fetchAPI } from '../../../services/twitterAPIv2'

let lastCache = new Date(0)
let cache: { results: unknown } = { results: {} }

export default async function timeline (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = <string>req.query?.query || ''
  if (Date.now() - lastCache.getTime() < 1000) { return res.status(200).json(cache) }
  try {
    const [results] = await fetchAPI({ endpoint: 'search', additionalParams: { query } })
    lastCache = new Date()
    cache = { results }
    res.status(200).json({ results })
  } catch (err) {
    const { message } = err as Error
    res.status(401).json({ error: message })
  }
}
