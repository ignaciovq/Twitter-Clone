import type { UserProfile } from '../../services/twitterAPIv2.d'
import styles from '../styles/twitterProfile.module.css'
import Image from 'next/image'
import { setVerifiedIcon } from '../../utils/tweetHandling'
import ContentTabs from './contentTabs'

export const TwitterProfile = ({ user }:{user:UserProfile}) => {
  const verifiedIcon = setVerifiedIcon(user?.verified_type)
  const creationDate = new Date(user?.created_at).toLocaleDateString('es-Es', { year: 'numeric', month: 'long' }).toLowerCase()
  return (
    <>
      <section className={`${styles.user_profile} flex_column`}>
        <div className={styles.profile_pic}>
          <Image src={user?.profile_image_url || 'default_pic.png'} alt={`${user?.username} pic`} width={150} height={150} />
        </div>
        <div className={`${styles.user_data} flex_column`}>
          <div>
            <h2>{user.name}</h2>
            {user.verified && (<Image src={verifiedIcon} alt='verified icon' width={18} height={18} />)}
          </div>
          <span>{`@${user.username}`}</span>
        </div>
        <div className={styles.user_description}>
          <p>{user.description}</p>
        </div>
        <div className={`${styles.creation_date} flex_row`}>
          <Image src='/icons/calendar.svg' alt='calendar' width={18} height={18} />
          <span>{`Se unió en ${creationDate}`}</span>
        </div>
      </section>
      <ContentTabs sections={[{ label: 'Tweets', href: '' }]} id='profile_tweets_menu' />
    </>
  )
}

export default TwitterProfile
