import React from 'react'

import phoneIcon from './phone.svg'
import styles from './index.module.css'

function Phone() {
  return (
    <div className={styles.phone}>
      <img src={phoneIcon} />
      +7 (995) 595-13-84
    </div>
  )
}

export default Phone
