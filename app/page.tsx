import styles from './page.module.css'
import { redirect } from 'next/navigation'
import isLoggedIn from '../utils/isLoggedIn'

function Page () {
  const loggedIn = isLoggedIn()
  if (loggedIn) { redirect('/home') }
  return (
    <>
      <div className={styles.page_title}>
        <h3>Landing</h3>
      </div>
    </>
  )
}

export default Page
