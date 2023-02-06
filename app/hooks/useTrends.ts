import { useEffect, useState } from 'react'
import { Trend } from '../../utils/trends'

export const useTrends = () => {
  const [trendData, setTrendData] = useState<Trend[]>([{ header: '', trend: 'Loading...', tweetCount: '# Tweets' }])

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/trends/for-you')
      const trends = await response.json() as Trend[]
      console.log(trends)
      setTrendData(trends.slice(0, 4))
    })()
  }, [])

  return trendData
}
