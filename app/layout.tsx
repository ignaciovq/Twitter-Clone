import './globals.css'
import styles from './layout.module.css'
import type { ReactNode } from 'react'
import Navbar from './components/navbar'
import LoginBar from './components/loginbar'
import AuthContext from './components/authContext'
import { Sidebar } from './components/sidebar'
import isLoggedIn from '../utils/session'

export default function RootLayout ({
  children
}: {
  children: ReactNode
}) {
  const loggedIn = isLoggedIn()
  return (
    <html lang='es'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <AuthContext>
          <Navbar />
          <section id={styles.main_section} className='flex_row'>
            <main className='flex_column'>
              {children}
            </main>
            <Sidebar />
          </section>
          {/* @ts-ignore */}
          {loggedIn || <LoginBar />}
        </AuthContext>
      </body>
    </html>
  )
}
