import React from 'react'
import clsx from 'clsx'

import styles from './footer.module.css'
import Phone from '../common/phone'
import Logo from '../common/logo'
import Menu from '../common/menu'
import Social from '../common/social'
import icon from './email.svg'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className="content">
          <div className={styles.vsection}>
            <div className={styles.hsection}>
              <Logo />
              <Phone />
            </div>
            <div className={styles.hsection}>
              <Menu />
              <Social />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="content">
          <div className={styles.vsection}>
            <div className={clsx(styles.hsection, styles.copyright)}> 
              Copyright CYBERGEEK (И.П. Чиркин Александр Олегович) @ {new Date().getFullYear()}
            </div>
            <div className={clsx(styles.hsection, styles.downloads)}>
              <a href="/docs/terms.docx" target="_blank">
                Условия
              </a>
              <a href="/docs/privacy.docx" target="_blank">
                Политика конфеденциальности
              </a>
            </div>
            <div className={clsx(styles.hsection, styles.mail)}>
              <img src={icon} alt="иконка почты" /> <a href="mailto:contacts@cybergeek.shop">contacts@cybergeek.shop</a>
            </div>
          </div>
        </div>
      </div>  
    </footer>
  )
}

export default Footer
