import styles from '../styles/navbar.module.css'
import linkData from '../../data/nav_menu.json'
import Image from 'next/image'
import SessionMenu from './sessionMenu'
import isLoggedIn from '../../utils/session'

export default function Navbar () {
  const { links } = linkData
  const loggedIn = isLoggedIn()
  const menuLinks = loggedIn ? links.slice(0, 9) : [links[0], links[2], links[9]]
  return (
    <header id={styles.header}>
      <nav id={styles.navigation} className='flex_column'>
        <section id={styles.nav_menu} className='flex_column'>
          {menuLinks.map((link) => {
            const iconWidth = link.icon?.size ? link.icon.size.width : 26
            const iconHeight = link.icon?.size ? link.icon.size.height : 26
            return (
              <a href='/Users/ignacio/WebstormProjects/ignaciovq/twitter-clone/pages' key={link.icon.alt} className={`${styles.nav_item} flex_row`}>
                <Image src={link.icon.src} alt={link.icon.alt} width={iconWidth} height={iconHeight} />
                {link.label && <span>{link.label.es}</span>}
              </a>
            )
          })}
        </section>
        {loggedIn && (
          <>
            <button type='button' id={styles.new_tweet_button} className='flex_row tweet_button'><span>Twittear</span><Image src='/icons/new_tweet.svg' alt='New Tweet' width={25} height={25} /></button>
            <SessionMenu />
          </>
        )}
      </nav>
    </header>
  )
}
