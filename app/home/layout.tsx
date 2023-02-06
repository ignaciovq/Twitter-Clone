import { ReactNode } from 'react'
import styles from './home.module.css'
import sections from '../../data/page_sections.json'
import ContentTabs from '../components/contentTabs'
import NewTweetBox from './newTweetBox'

export default function HomeLayout ({
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
        <ContentTabs id='home' sections={homepage} />
      </div>
      <NewTweetBox />
      {children}
    </>
  )
}
