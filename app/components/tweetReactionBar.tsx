'use client'
import type { TweetData } from '../../services/twitterAPIv2.d'
import styles from '../styles/tweet.module.css'
import Image from 'next/image'

export const TweetReactionBar = ({ metrics }:{ metrics: TweetData['public_metrics'] }) => {
  return (
    <footer className={`${styles.reaction_bar} flex_row`}>
      <div className={styles.comment_button}>
        <button type='button'>
          <Image src='/icons/tweets/replies.svg' alt='reply icon' width={18} height={18} />
          <label>Responder</label>
        </button>
        <span>{metrics.reply_count}</span>
      </div>
      <div className={styles.retweet_button}>
        <button type='button'>
          <Image src='/icons/tweets/retweets.svg' alt='retweet icon' width={18} height={18} />
          <label>Retwittear</label>
        </button>
        <span>{metrics.retweet_count}</span>
      </div>
      <div className={styles.like_button}>
        <button type='button'>
          <Image src='/icons/tweets/like.svg' alt='like icon' width={18} height={18} />
          <label>Me gusta</label>
        </button>
        <span>{metrics.like_count}</span>
      </div>
      <div className={styles.views}>
        <button>
          <Image src='/icons/tweets/views.svg' alt='views icon' width={18} height={18} />
          <label>Vistas</label>
        </button>
        <span>{metrics.impression_count}</span>
      </div>
      <div className={styles.share_button}>
        <button type='button'>
          <Image src='/icons/tweets/share.svg' alt='share icon' width={18} height={18} />
          <label>Compartir</label>
        </button>
      </div>
    </footer>
  )
}
