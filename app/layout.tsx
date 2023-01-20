import './globals.css'
import Navbar from './components/navbar'
import LoginBar from './components/loginbar'
import AuthContext from './components/authContext'
import { Sidebar } from './components/sidebar'
import isLoggedIn from '../utils/isLoggedIn'

export default function RootLayout ({
  children
}: {
    // eslint-disable-next-line no-undef
  children: React.ReactNode
}) {
  const loggedIn = isLoggedIn()
  return (
    <html lang='es'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head><title>Twitter</title></head>
      <body>
        <AuthContext>
          {/* @ts-ignore */}
          <Navbar />
          <main>
            {children}
          </main>
          <Sidebar />
          {/* @ts-ignore */}
          {loggedIn || <LoginBar />}
        </AuthContext>
      </body>
    </html>
  )
}
