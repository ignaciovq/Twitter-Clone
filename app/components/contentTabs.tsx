'use client'
import styles from '../styles/contentTabs.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const ContentTabs = ({ sections, id }:{ sections: Array<{ label: string, href: string }>, id: string }) => {
  const pathname = usePathname() as string
  const initialPath = pathname === '/explore' || pathname === '/' || pathname === '/home' || pathname.includes('search')
  return (
    <div id={styles[id]} className={`${styles.content_switcher}`}>
      {sections.map((section, index) => {
        const classes = pathname.includes(section.href) && !initialPath ? `${styles.active}` : ''
        if (initialPath && index === 0) { return (<Link key={section.label} id={styles[index]} className={styles.active} type='button' href={`/${section.href}`} prefetch={false}><span>{section.label}</span></Link>) }
        return (<Link key={section.label} id={styles[index]} className={classes} type='button' href={`/${section.href}`} prefetch={false}><span>{section.label}</span></Link>)
      })}
    </div>
  )
}

export default ContentTabs
