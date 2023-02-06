import type { TweetData } from '../../services/twitterAPIv2.d'
import { Tweet } from './tweet'
import styles from '../styles/tweet.module.css'

export function TweetScroller ({ tweetList, id = '' }: { tweetList: TweetData[], id?: string }) {
  if (!tweetList || tweetList.length < 1) { return (<></>) }
  const tweets = tweetList.map((tweet: TweetData) => {
    return <Tweet key={tweet.id} tweet={tweet} />
  })
  return (
    <div id={styles[id]}>
      {tweets}
    </div>
  )
}

export default TweetScroller
