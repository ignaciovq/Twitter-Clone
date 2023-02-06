import styles from '../explore/explore.module.css'
import Searchbar from '../components/searchbar'
import Image from 'next/image'
import ContentTabs from '../components/contentTabs'
import sections from '../../data/page_sections.json'
import { searchTweets } from '../../utils/APICalls'
import TweetScroller from '../components/tweetScroller'
export default async function Search ({ searchParams }:{ searchParams?: {q: string} }) {
  const { search } = sections
  const q = searchParams?.q
  const { results } = (q && q?.length > 3) ? await searchTweets(q) : ''
  return (
    <>
      <div className='top'>
        <div id={styles.search_section} className='flex_row'>
          <Searchbar id='search_section' />
          <button className={`${styles.settings} round_button`} type='button'>
            <Image
              src='/icons/options.svg'
              alt='settings' height={22}
              width={22}
            />
          </button>
        </div>
        <ContentTabs id='search_tabs' sections={search} />
      </div>
      {results && <TweetScroller tweetList={results} id='search_results' />}
    </>
  )
}
