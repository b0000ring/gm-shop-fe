import React from 'react'
import { Link } from 'gatsby'

import styles from './index.module.css'

function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <span className={styles.logoStart}>MINI</span>
      <span className={styles.logoEnd}>BIT</span>
    </Link>
  )
}

export default Logo
