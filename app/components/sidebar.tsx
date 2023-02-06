'use client'
import { usePathname } from 'next/navigation'
import styles from '../styles/sidebar.module.css'
import Image from 'next/image'
import { Searchbar } from './searchbar'
import Link from 'next/link'
import RegisterMenu from './registerMenu'
import { useSession } from 'next-auth/react'
import { useTrends } from '../hooks/useTrends'
import TrendList from './trendList'

export const Sidebar = () => {
  const { status } = useSession()
  const pathname = usePathname()
  const showTrends = pathname !== '/' && !pathname?.includes('/explore')
  const showSidebar = showTrends && !pathname?.includes('/search')
  const trends = useTrends()
  console.log(trends)
  return (
    <aside id={styles.sidebar}>
      <div className='container flex_column'>
        {showSidebar && <Searchbar id='sidebar_search' />}
        {status === 'unauthenticated' && <RegisterMenu />}
        {(showTrends && status === 'authenticated') &&
            (
              <div id={styles.sidebar_trends} className='flex_column'>
                <h2>Qué está pasando</h2>
                <TrendList trends={trends} sidebar />
                <Link href='/explore/tabs/for-you'>Mostrar más</Link>
              </div>
            )}
        <footer id={styles.tos}>
          <Link href='/'>Condiciones de Servicio</Link>
          <Link href='/'>Política de Privacidad</Link>
          <Link href='/'>Política de cookies</Link>
          <Link href='/'>Accesibilidad</Link>
          <Link href='/'>Información de anuncios</Link>
          <div><Link href='/'>Más opciones</Link><Image src='/icons/options.svg' alt='...' width={12} height={12} /></div>
          <p>© 2023 Twitter, Inc.</p>
        </footer>
      </div>
    </aside>
  )
}

export default Sidebar
