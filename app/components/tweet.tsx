import type { TweetData } from '../../services/twitterAPIv2.d'
import styles from '../styles/tweet.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { parseTweetDate, setVerifiedIcon } from '../../utils/tweetHandling'
import { TweetReactionBar } from './tweetReactionBar'

/* href={`${process.env.NEXTAUTH_URL}/${tweet.author.username}/status/${tweet.id}`} */

export const Tweet = ({ tweet }:{ tweet: TweetData }) => {
  const verifiedIcon = setVerifiedIcon(tweet.author?.verified_type)
  const creationDate = parseTweetDate(tweet.created_at)
  return (
    <div className={`${styles.tweet} flex_row`}>
      <div className={styles.profile_pic}>
        <Image src={tweet.author.profile_image_url} alt={`${tweet.author.username} pic`} width={48} height={48} />
      </div>
      <section className={`${styles.main_section} flex_column`}>
        <header className='flex_row'>
          <div className={`${styles.author_data} flex_row`}>
            <div>
              <Link href={`${process.env.NEXTAUTH_URL}/${tweet.author.username}`}>{tweet.author.name}</Link>
              {tweet.author.verified && (<Image src={verifiedIcon} alt='verified icon' width={18} height={18} />)}
            </div>
            <span>{`@${tweet.author.username} ·`}</span>
            <span>{creationDate}</span>
          </div>
          <button type='button'><Image src='/icons/options.svg' alt='...' width={18} height={18} /></button>
        </header>
        <span className={styles.tweet_text}>{tweet.text}</span>
        {tweet.media && (
          <div className={styles.media}>
            {tweet.media.map((media) => {
              if (media?.type === 'video' && media?.url) {
                return (
                  <video key={media.media_key} controls width='510.8px' height='auto' src={media.url} poster={media.preview_image_url}>
                    {media?.variants && media.variants.map((variant) => {
                      return <source key={variant.url} src={variant.url} type={variant.content_type} />
                    })}
                  </video>
                )
              }
              return (
                <Image
                  key={media.media_key} src={media?.url || media?.preview_image_url as string} alt={media.alt_text || ''} width={510.8}
                  height={media.height}
                />
              )
            })}
          </div>
        )}
        <TweetReactionBar metrics={tweet.public_metrics} />
      </section>
    </div>
  )
}

export default Tweet
