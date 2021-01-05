import React from 'react'
import clsx from 'clsx'

import Catalog from '../common/catalog'
import styles from './header.module.css'
import Menu from '../common/menu'
import CartInfo from './CartInfo'
import Phone from '../common/phone'
import Logo from '../common/logo'
import Social from '../common/social'

function Header() {
  return (
    <header className={styles.header}>
      <div className={clsx(styles.headerTop, 'content')}>
        <div className={styles.headerSection}>
          <Logo />
          <Phone />
          <div className={styles.workingHours}>
            Пн-Вс с 09:00 до 21:00
          </div>
        </div>
        <div className={styles.headerSection}>
          <Social />
        </div>
      </div>
      <div className={styles.divider} />
      <div className={clsx(styles.headerTop, 'content')}>
        <div className={styles.menu}>
          <Catalog />
          <Menu filter={(item) => item.link !== '/catalog'}/>
        </div>
        <div>
          <CartInfo />
        </div>
      </div>
    </header>
  )
}

export default Header
