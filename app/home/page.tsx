import { redirect } from 'next/navigation'
import { TweetScroller } from '../components/tweetScroller'
// eslint-disable-next-line camelcase
import { unstable_getServerSession } from 'next-auth'
import { authOptions, User } from '../../pages/api/auth/[...nextauth]'
import { getTimeline } from '../../utils/APICalls'
import { signOut } from 'next-auth/react'
export default async function Home () {
  const session = await unstable_getServerSession(authOptions)
  if (!session?.user) { redirect('/') }
  // @ts-ignore
  if (Date.now() >= session.user?.expires * 1000) {
    await signOut()
  }
  const user = session?.user as User
  const { timeline } = await getTimeline(user.id)
  return (
    <div>
      <TweetScroller tweetList={timeline} />
    </div>
  )
}
