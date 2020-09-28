import React from 'react'
import { SocialIcon } from 'react-social-icons'

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
        <div className={styles.icons}>
          <SocialIcon url="http://vk.com" />
          <SocialIcon url="http://instagram.com" />
          <SocialIcon url="http://twitter.com" />
        </div>
        <div>
          <CartInfo/>
          <div className={styles.phone}>
            +7 (995) 595-13-84
          </div>
        </div>
        
      </div>
      <Menu/>
    </header>
  )
}

export default Header