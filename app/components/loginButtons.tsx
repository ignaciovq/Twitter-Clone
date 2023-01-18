'use client'
import { signIn } from 'next-auth/react'
import styles from '../styles/loginbar.module.css'

export const LoginButtons = () => {
  return (
    <div id={styles.login_buttons} className='flex_row'>
      <button type='button' onClick={() => signIn('twitter')}>Iniciar sesión</button>
      <button type='button'>Regístrate</button>
    </div>
  )
}

export default LoginButtons
