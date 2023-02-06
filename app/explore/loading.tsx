import Image from 'next/image'
import styles from '../home/home.module.css'

export const exploreLoader = () => {
  return (
    <div className={`${styles.tweet_loader} ${styles.explore_loader}`}>
      <Image src='/icons/spinner.svg' alt='spinner' width={45} height={45} />
    </div>
  )
}

export default exploreLoader
