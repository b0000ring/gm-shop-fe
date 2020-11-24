import React from 'react'
import { Link } from 'gatsby'

import styles from './index.module.css'

function Item() {
  return (
    <Link href={`/item?id=${'123'}`} className={styles.item}>
      <img src="/test.PNG" className={styles.photo} />
      <div className={styles.name}>
        BittBoy
      </div>
      <div className={styles.price}>
        1000р
      </div>
    </Link>
  )
}

export default Item