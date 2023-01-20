import styles from '../styles/searchbar.module.css'
import Image from 'next/image'

export const Searchbar = () => {
  return (
    <section id={styles.searchbar}>
      <Image src='/icons/search.svg' alt='search icon' width={19} height={19} />
      <input type='search' placeholder='Buscar en Twitter' />
    </section>
  )
}

export default Searchbar
