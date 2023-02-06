import playwright from 'playwright-firefox'

const { firefox } = playwright

export type Tab = 'for-you' | 'trending' | 'news_unified' | 'sports_unified' | 'entertainment_unified'

export type Trend = {
    header: string,
    trend: string,
    tweetCount: string
}

export default async function getTrending (tab: Tab) {
  let results:Trend[]
  const browser = await firefox.launch()
  const page = await browser.newPage()
  await page.goto(`https://twitter.com/explore/tabs/${tab}`, { waitUntil: 'networkidle' })
  if (tab === 'trending') {
    results = await page.$$eval('[data-testid="trend"]', (trends) => trends.map((trend) => {
      const trendObj = { header: '', trend: '', tweetCount: '' }
      const spans = trend.querySelectorAll('span')
      trendObj.header = <string>spans[0]?.textContent + <string>spans[1]?.textContent + <string>spans[2]?.textContent
      trendObj.trend = spans[3]?.textContent as string
      trendObj.tweetCount = spans[4]?.textContent as string || ''
      return trendObj
    }))
  } else {
    results = await page.$$eval('[data-testid="trend"]', (trends) => trends.map((trend) => {
      const trendObj = { header: '', trend: '', tweetCount: '' }
      const spans = trend.querySelectorAll('span')
      trendObj.header = spans[0]?.textContent as string
      trendObj.trend = spans[1]?.textContent as string
      trendObj.tweetCount = spans[2]?.textContent as string || ''
      return trendObj
    }))
  }
  await page.close()
  await browser.close()
  return { results, tab }
}
