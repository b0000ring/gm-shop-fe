import React from 'react'
import { Link } from 'gatsby'

import styles from './index.module.css'
import icon from './icon.svg'

function Item({ id, image, name, price, newPrice }) {
  return (
    <div className={styles.item}>
      <Link href={`/item/${id}`}>
        <img src={image} className={styles.photo} />
        <div className={styles.name}>
          {name}
        </div>
      </Link>
      <div className={styles.price}>
        <div>
          <span>
            {newPrice || price} ₽
          </span>
          <span>
            {newPrice ? `${price} ₽` : null}
          </span>
        </div>
        <Link herf="#">
          <img src={icon} />
        </Link>
      </div>
    </div>
  )
}

export default Item
