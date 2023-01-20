import styles from '../styles/registerMenu.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const RegisterMenu = () => {
  return (
    <section id={styles.registerMenu} className='flex_column'>
      <h3>¿Eres nuevo en Twitter?</h3>
      <span>Registrate para obtener tu propia cronología pesonalizada.</span>
      <Link href='/'><Image src='/icons/png-transparent-google.png' alt='Google Logo' width={18} height={18} />Registrarse con Google</Link>
      <Link href='/'><Image src='/icons/png-transparent-apple.png' alt='Apple Logo' width={18} height={18} />Registrarse con Apple</Link>
      <Link href='/'>Crear cuenta</Link>
      <footer>Al registrarte, aceptas los <Link href='/'>Términos de servicio</Link> y la <Link href='/'>Política de privacidad</Link>, incluida la política de <Link href='/'>Uso de Cookies</Link>.</footer>
    </section>
  )
}

export default RegisterMenu
