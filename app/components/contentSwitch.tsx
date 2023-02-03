'use client'
import type { ReactNode, MouseEvent } from 'react'
import styles from '../styles/contentSwitch.module.css'

const switchContent = (event: MouseEvent<HTMLButtonElement>) => {
  const sectionButtons = document.querySelectorAll(`div.${styles.content_switcher} > button`)
  if (sectionButtons) {
    sectionButtons.forEach((button) => {
      button.classList.remove(styles.active)
    })
  }
  // @ts-ignore
  const sectionButton = event.target.tagName === 'BUTTON' ? event.target : event.target.parentElement
  if (sectionButton) {
    sectionButton.classList.add(styles.active)
  }
}

export const ContentSwitch = ({ sections, id }:{ sections: Array<string>, id: string }) => {
  return (
    <div id={styles[id]} className={`${styles.content_switcher}`}>
      {sections.map((section, index) => {
        if (index === 0) { return (<button key={section} id={styles[index]} className={styles.active} onClick={switchContent}><span>{section}</span></button>) }
        return (<button key={section} id={styles[index]} type='button' onClick={switchContent}><span>{section}</span></button>)
      })}
    </div>
  )
}

export default ContentSwitch
