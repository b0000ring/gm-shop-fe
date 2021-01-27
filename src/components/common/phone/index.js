import React from 'react'

import phoneIcon from './phone.svg'
import styles from './index.module.css'

function Phone() {
  return (
    <div className={styles.phone}>
      <img src={phoneIcon} />
      +7 (981) 994-87-85
    </div>
  )
}

export default Phone
