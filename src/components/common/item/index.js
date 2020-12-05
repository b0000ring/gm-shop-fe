import React from 'react'
import { Link } from 'gatsby'

import styles from './index.module.css'

function Item({ id, image, name, price }) {
  return (
    <Link href={`/item/${id}`} className={styles.item}>
      <img src={image} className={styles.photo} />
      <div className={styles.name}>
        {name}
      </div>
      <div className={styles.price}>
        {price}р
      </div>
    </Link>
  )
}

export default Item