import { setAuthorizationHeader } from '../../utils/session'
import type { TweetData } from '../../services/twitterAPIv2.d'
import { Tweet } from './tweet'

async function getTimeline () {
  const { headers } = setAuthorizationHeader()
  const res = await fetch('http://localhost:3000/api/timeline', {
    method: 'GET',
    headers
  })
  return await res.json()
}

export async function TweetScroller () {
  const { timeline } = await getTimeline()
  const tweets = timeline.map((tweet: TweetData) => {
    return <Tweet key={tweet.id} tweet={tweet} />
  })
  return (
    <div>
      {tweets}
    </div>
  )
}

export default TweetScroller
