'use client'
import styles from '../styles/searchbar.module.css'
import Image from 'next/image'
import { FormEvent } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

export const Searchbar = ({ id }:{id: string}) => {
  const params = useSearchParams()
  const router = useRouter()
  const q = params?.get('q')

  const searchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // @ts-ignore
    const query = event.target.search.value
    if (query?.length > 3) { router.replace(`/search?q=${query}`) }
  }

  return (
    <section id={styles[id]} className={styles.searchbar}>
      <form onSubmit={searchSubmit}>
        <Image src='/icons/search.svg' alt='search icon' width={19} height={19} />
        <input type='search' name='search' placeholder='Buscar en Twitter' defaultValue={q || ''} />
        <input type='submit' hidden />
      </form>
    </section>
  )
}

export default Searchbar
