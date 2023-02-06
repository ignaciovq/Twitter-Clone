import { useEffect, useState } from 'react'
import { Trend } from '../../utils/trends'

export const useTrends = (pathname: string) => {
  const [trendData, setTrendData] = useState<Trend[]>([{ header: '', trend: 'Loading...', tweetCount: '# Tweets' }])

  useEffect(() => {
    if (pathname !== '/' && !pathname?.includes('/explore')) {
      (async () => {
        const response = await fetch('/api/trends/for-you')
        const trends = await response.json() as Trend[]
        setTrendData(trends.slice(0, 4))
      })()
    }
  }, [pathname])

  return trendData
}
