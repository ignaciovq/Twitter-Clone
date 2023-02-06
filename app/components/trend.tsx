import { Trend } from '../../utils/trends'
import styles from '../styles/trend.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function TrendViewer ({ trend }:{trend: Trend}) {
  const lastItem = trend.tweetCount.includes('Tweets') && trend.tweetCount !== '' ? trend.tweetCount : `Tendencias sobre ${trend.tweetCount}`
  return (
    <Link className={`${styles.trend_viewer} flex_row`} href={`/search?q=${trend.trend}`}>
      <div className={`${styles.trend_container} flex_column`}>
        <span className={styles.trend_header}>{trend.header}</span>
        <span className={styles.trend}>{trend.trend}</span>
        <span className={styles.tweet_count}>{lastItem}</span>
      </div>
      <div className={`${styles.trend_options} flex_column`}>
        <button className='round_button'><Image src='/icons/options.svg' alt='...' width={18} height={18} /></button>
      </div>
    </Link>
  )
}
