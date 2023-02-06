import Image from 'next/image'
import styles from './page.module.css'

export const rootLoader = () => {
  return (
    <div id={styles.main_loader} style={{ width: '100vw', height: '100vh' }} className='flex_row'>
      <Image src='/icons/main-logo.svg' alt='Twitter Logo' width={150} height={150} />
    </div>
  )
}

export default rootLoader
