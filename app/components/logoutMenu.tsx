import { signOut } from 'next-auth/react'
import Modal from './modal'

export const LogoutMenu = ({ modalId, username }:{modalId: string, username: string}) => {
  return (
    <Modal modalId={modalId}>
      <menu className='flex_column'>
        <button type='button'>Agregar una cuenta existente</button>
        <button type='button' onClick={() => signOut()}><span>Cerrar la sesión de</span><p>{`@${username}`}</p></button>
      </menu>
    </Modal>
  )
}
