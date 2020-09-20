import React from 'react'

import styles from './header.module.css'
import Menu from './Menu'
import CartInfo from './CartInfo'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.logo}>
          <span className={styles.logoStart}>MINI</span>
          <span className={styles.logoEnd}>BIT</span>
        </div>
        <CartInfo/>
      </div>
      <Menu/>
    </header>
  )
}

export default Header