import { useEffect, useState } from 'react'
import style from '../styles/modal.module.css'

export const useModal = (modalId: string, openButtonId: string) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function openModal () {
    setModalIsOpen(true)
    document.addEventListener('click', handleClickOutside, false)
  }

  function closeModal () {
    setModalIsOpen(false)
    document.removeEventListener('click', handleClickOutside, false)
  }

  function handleClickOutside (event: MouseEvent) {
    if (!event.target) return
    // @ts-ignore
    if (!event.target.closest(`#${style[modalId]}`) && !event.target.closest(`#${openButtonId}`)) { closeModal() }
  }

  useEffect(() => {
    const modal = document.getElementById(style[modalId])
    const display = modalIsOpen ? 'block' : 'none'
    if (modal) modal.style.display = display
  }, [modalIsOpen, modalId])

  return { modalIsOpen, openModal, closeModal }
}
