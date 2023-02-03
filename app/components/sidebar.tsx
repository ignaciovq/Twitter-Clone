import styles from '../styles/sidebar.module.css'
import Image from 'next/image'
import { Searchbar } from './searchbar'
import isLoggedIn from '../../utils/session'
import Link from 'next/link'
import RegisterMenu from './registerMenu'

export const Sidebar = () => {
  const loggedIn = isLoggedIn()
  return (
    <aside id={styles.sidebar}>
      <div className='container flex_column'>
        {loggedIn && <Searchbar />}
        {!loggedIn && <RegisterMenu />}
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
