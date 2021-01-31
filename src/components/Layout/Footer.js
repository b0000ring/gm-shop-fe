import React from 'react'
import clsx from 'clsx'
import { Link } from 'gatsby'

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
              Copyright MINIBIT (И.П. Чиркин Александр Олегович) @ 2020
            </div>
            <div className={clsx(styles.hsection, styles.downloads)}>
              <Link href="/docs/terms.docx" target="_blank">
                Условия
              </Link>
              <Link href="/docs/privacy.docx" target="_blank">
                Политика конфеденциальности
              </Link>
            </div>
            <div className={clsx(styles.hsection, styles.mail)}>
              <img src={icon} /> <Link href="mailto:hello@minibit.shop">hello@minibit.shop</Link>
            </div>
          </div>
        </div>
      </div>  
    </footer>
  )
}

export default Footer
