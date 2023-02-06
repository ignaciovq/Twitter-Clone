import styles from '../app/explore/explore.module.css'
import { redirect } from 'next/navigation'
import isLoggedIn from '../utils/session'
import sections from '../data/page_sections.json'
import Searchbar from './components/searchbar'
import Image from 'next/image'
import ContentTabs from './components/contentTabs'
import TrendList from './components/trendList'
import { getTrends } from '../utils/APICalls'

async function Page () {
  const loggedIn = isLoggedIn()
  if (loggedIn) { redirect('/home') }
  const { explore } = sections
  const trends = await getTrends('for-you')
  return (
    <>
      <div className='top'>
        <div className={`${styles.search_section} flex_row`}>
          <Searchbar id='explore_section' />
          <button className={`${styles.settings} round_button`} type='button'><Image src='/icons/nav_menu/settings.svg' alt='settings' height={22} width={22} /></button>
        </div>
        <ContentTabs id='explore_tabs' sections={explore} />
      </div>
      <TrendList trends={trends} />
    </>
  )
}

export default Page
