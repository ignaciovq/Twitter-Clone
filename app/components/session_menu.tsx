'use client'
import type { DefaultSession } from 'next-auth'
import styles from '../styles/profile.module.css'
import Image from 'next/image'
import { ISODateString } from 'next-auth/core/types'
import { signOut, useSession } from 'next-auth/react'

export interface Session extends DefaultSession {
  user?: {
    name?: string | null
    email?: string | null
    image?: string | null
    username?: string | null
  }
  expires: ISODateString;
}

export const SessionMenu = () => {
  const { data: session }:{data: Session | null} = useSession()
  if (!session?.user) { return (<></>) }
  console.log(session.user)
  const { name: fullName, username, image } = session.user
  return (
    <button id={styles.profile} className='flex_row' onClick={() => signOut()}>
      <Image src={image || '../../public/default_pic.png'} alt='profile picture' width={35} height={35} />
      <div id={styles.profile_info} className='flex_column'>
        <span>{fullName}</span>
        {username && (<span>{`@${username}`}</span>)}
      </div>
      <Image src='/icons/options.svg' alt='...' width={15} height={15} />
    </button>
  )
}

export default SessionMenu
