import { getUser, getTimeline } from '../../utils/APICalls'
import TweetScroller from '../components/tweetScroller'
import { TwitterProfile } from '../components/twitterProfile'

export default async function Profile ({ params }:{params: {username: string}}) {
  const { username } = params
  const { user } = await getUser(username)
  const { timeline } = await getTimeline(user?.id)
  return (
    <>
      <TwitterProfile user={user} />
      <TweetScroller tweetList={timeline} />
    </>
  )
}
