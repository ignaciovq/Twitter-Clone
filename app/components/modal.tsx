import style from '../styles/modal.module.css'

// eslint-disable-next-line no-undef
export const Modal = ({ children, modalId, header = '' }:{children:React.ReactNode, modalId: string, header?: string}) => {
  return (
    <div id={style[modalId]} className={style.modal}>
      <section>
        <header>{header}</header>
        <main>
          {children}
        </main>
      </section>
      <div id={style[`${modalId}_arrow`]} className={style.arrow_div} />
    </div>
  )
}

export default Modal
