import React from 'react'

import styles from './index.module.css'

function Item() {
  return (
    <div className={styles.item}>
      <img src="/test.PNG" className={styles.photo} />
      <div className={styles.name}>
        BittBoy
      </div>
      <div className={styles.price}>
        1000р
      </div>
    </div>
  )
}

export default Item