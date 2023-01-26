'use client'
import styles from './newTweetBox.module.css'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import data from '../../data/new_tweet_box.json'
import { useState } from 'react'

export const NewTweetBox = () => {
  const { data: session } = useSession()
  const { tweetOptions: opt } = data
  const [text, setText] = useState('')
  return (
    <form className={`${styles.tweet_box} flex_row`}>
      <Image src={session?.user?.image || '/public/default_pic.png'} alt='profile picture' width={48} height={48} />
      <textarea placeholder='¿Qué está pasando?' value={text} onChange={(e) => setText(e.target.value)} maxLength={280} />
      <footer className='flex_row'>
        <div className={`${styles.tweet_options} flex_row`}>
          {opt.map((o, i, arr) => {
            return (
              <button key={o.icon.alt} type='button' disabled={i === arr.length - 1}>
                <Image src={o.icon.src} alt={o.icon.alt} width={20} height={20} />
                <label>{o.label}</label>
              </button>
            )
          })}
        </div>
        <button id={styles.tweet_button} type='submit' className='tweet_button' disabled={!text}>Twittear</button>
      </footer>
    </form>
  )
}

export default NewTweetBox
