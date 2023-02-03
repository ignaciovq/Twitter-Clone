import { isLoggedIn } from '../../utils/session'
import { redirect } from 'next/navigation'
import { TweetScroller } from '../components/tweetScroller'

export default function Home () {
  const loggedIn = isLoggedIn()
  if (!loggedIn) { redirect('/') }
  // const data = await getData()
  // console.log(data)
  return (
    <>
      {/* @ts-ignore */}
      <TweetScroller />
    </>
  )
}
