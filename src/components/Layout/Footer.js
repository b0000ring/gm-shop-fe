import React from 'react'
import clsx from 'clsx'
import { Link } from 'gatsby'

import styles from './footer.module.css'
import Phone from '../common/phone'
import Logo from '../common/logo'
import Menu from '../common/menu'
import Social from '../common/social'

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
              Copyright MINIBIT @ 2020
            </div>
            <div className={clsx(styles.hsection, styles.downloads)}>
              <Link href="#">
                Условия
              </Link>
              <Link href="#">
                Политика конфеденциальности
              </Link>
            </div>
            <div className={clsx(styles.hsection, styles.mail)}>
              hello@minibit.shop
            </div>
          </div>
        </div>
      </div>  
    </footer>
  )
}

export default Footer
