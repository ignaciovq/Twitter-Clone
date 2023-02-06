import { ReactNode } from 'react'
import styles from './explore.module.css'
import sections from '../../data/page_sections.json'
import ContentTabs from '../components/contentTabs'
import Searchbar from '../components/searchbar'
import Image from 'next/image'

export default function ExploreSectionLayout ({
  children
}: {
    children: ReactNode
}) {
  const { explore } = sections
  return (
    <>
      <div className='top'>
        <div className={`${styles.search_section} flex_row`}>
          <Searchbar id='explore_section' />
          <button className={`${styles.settings} round_button`} type='button'><Image src='/icons/nav_menu/settings.svg' alt='settings' height={22} width={22} /></button>
        </div>
        <ContentTabs id='explore_tabs' sections={explore} />
      </div>
      {children}
    </>
  )
}
