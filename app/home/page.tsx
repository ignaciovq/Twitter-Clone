import styles from './home.module.css'
import isLoggedIn from '../../utils/isLoggedIn'
import { redirect } from 'next/navigation'
import sections from '../../data/page_sections.json'
import ContentSwitch from '../components/contentSwitch'
import NewTweetBox from './newTweetBox'

export default function Home () {
  const loggedIn = isLoggedIn()
  if (!loggedIn) { redirect('/') }
  const { homepage } = sections
  return (
    <>
      <div className='top'>
        <div className={styles.page_title}>
          <p>Inicio</p>
        </div>
        <ContentSwitch id='home' sections={homepage}>
          <div className={styles.content} />
        </ContentSwitch>
      </div>
      <NewTweetBox />
    </>
  )
}
