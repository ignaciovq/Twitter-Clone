'use client'
import { SessionProvider } from 'next-auth/react'

export default function AuthContext ({
  children
// eslint-disable-next-line no-undef
}: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}
