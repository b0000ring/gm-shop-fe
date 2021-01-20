import React from 'react'
import { Link } from 'gatsby'

import styles from './index.module.css'
import icon from './cartWhite.svg'
import * as cartController from 'src/controllers/cartController'

function Item({ id, image, name, price, newPrice, itemData }) {

  function addToCart() {
    cartController.addItem(itemData, 1, itemData.colors[0].value)
  }

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
        <div className={styles.addButton} onClick={addToCart}>
          <img src={icon} />
        </div>
      </div>
    </div>
  )
}

export default Item
