import Image from 'next/image'
import styles from './home.module.css'

export const homeLoader = () => {
  return (
    <div className={styles.tweet_loader}>
      <Image src='/icons/spinner.svg' alt='spinner' width={45} height={45} />
    </div>
  )
}

export default homeLoader
