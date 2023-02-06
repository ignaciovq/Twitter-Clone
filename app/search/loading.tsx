import Image from 'next/image'
import styles from '../home/home.module.css'

export default function searchLoader () {
  return (
    <div className={`${styles.tweet_loader} ${styles.search_loader}`}>
      <Image src='/icons/spinner.svg' alt='spinner' width={45} height={45} />
    </div>
  )
}
