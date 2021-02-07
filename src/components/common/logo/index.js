import React from 'react'
import { Link } from 'gatsby'

import styles from './index.module.css'

function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <span className={styles.logoStart}>CYBER</span>
      <span className={styles.logoEnd}>GEEK</span>
    </Link>
  )
}

export default Logo
