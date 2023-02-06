import { NextApiRequest, NextApiResponse } from 'next'
import getTrending, { Tab, Trend } from '../../../utils/trends'

type TrendCache = {
  [key: string]: Trend[]
}

const lastCache = { lastTab: 'for-you', 'for-you': new Date(0), trending: new Date(0), news_unified: new Date(0), sports_unified: new Date(0), entertainment_unified: new Date(0) }
const cache: TrendCache = { 'for-you': [], trending: [], news_unified: [], sports_unified: [], entertainment_unified: [] }

export default async function trends (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const tabRoute = <Tab>req.query?.tab || ''
  // @ts-ignore
  if (Date.now() - lastCache[lastCache.lastTab].getTime() < 1000 * 10) { return res.status(200).json(cache[lastCache.lastTab]) }
  if (Date.now() - lastCache[tabRoute].getTime() < 1000 * 60 * 2) { return res.status(200).json(cache[tabRoute]) }
  const { results, tab } = await getTrending(tabRoute)
  cache[tab] = results
  lastCache[tab] = new Date()
  lastCache.lastTab = tab
  res.status(200).json(results)
}
