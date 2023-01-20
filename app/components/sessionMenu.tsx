'use client'
import type { DefaultSession } from 'next-auth'
import styles from '../styles/profile.module.css'
import Image from 'next/image'
import { ISODateString } from 'next-auth/core/types'
import { useSession } from 'next-auth/react'
import { useModal } from '../hooks/useModal'
import { LogoutMenu } from './logoutMenu'

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
  const modalId = 'logout_menu'
  const openButtonId = styles.profile
  const { openModal } = useModal(modalId, openButtonId)
  if (!session?.user) { return (<></>) }
  const { name: fullName, username, image } = session.user
  return (
    <>
      <LogoutMenu modalId={modalId} username={username || fullName || ''} />
      <button id={openButtonId} className='flex_row' onClick={openModal}>
        <Image src={image || '../../public/default_pic.png'} alt='profile picture' width={40} height={40} />
        <div id={styles.profile_info} className='flex_column'>
          <p>{fullName}</p>
          {username && (<span>{`@${username}`}</span>)}
        </div>
        <Image src='/icons/options.svg' alt='...' width={19} height={19} />
      </button>
    </>
  )
}

export default SessionMenu
