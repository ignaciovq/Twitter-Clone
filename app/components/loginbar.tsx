import styles from '../styles/loginbar.module.css'
import { getSession } from 'next-auth/react'
import LoginButtons from './loginButtons'

export default async function LoginBar () {
  const session = await getSession()
  if (session) return (<></>)
  return (
    <footer id={styles.login_bar} className='flex_row'>
      <div id={styles.text} className='flex_column'>
        <p>No te pierdas lo que está pasando</p>
        <span>Los usuarios de Twitter son los primeros en enterarse.</span>
      </div>
      <LoginButtons />
    </footer>
  )
}
