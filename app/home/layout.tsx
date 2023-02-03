import { ReactNode } from 'react'
import styles from './home.module.css'
import sections from '../../data/page_sections.json'
import ContentSwitch from '../components/contentSwitch'
import NewTweetBox from './newTweetBox'

export default function RootLayout ({
  children
}: {
    children: ReactNode
}) {
  const { homepage } = sections
  return (
    <>
      <div className='top'>
        <div className={styles.page_title}>
          <p>Inicio</p>
        </div>
        <ContentSwitch id='home' sections={homepage} />
      </div>
      <NewTweetBox />
      {children}
    </>
  )
}
