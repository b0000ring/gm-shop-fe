import React from 'react'
import { Link } from 'gatsby'
import clsx from 'clsx'

import styles from './index.module.css'
import icon from './cartWhite.svg'
import * as cartController from 'src/controllers/cartController'

function Item({ code, image, name, price, newPrice, itemData }) {

  function addToCart() {
    cartController.addItem(itemData, 1, itemData.colors[0].value)
  }

  function getLabel() {
    if(itemData.out) {
      return (
        <div className={clsx(styles.marker, styles.outMarker)}>
          РАСПРОДАНО
        </div>
      )
    }
    if(newPrice) {
      return (
        <div className={clsx(styles.marker, styles.saleMarker)}>
          СКИДКА
        </div>
      )
    }
  }

  return (
    <div className={clsx(styles.item, itemData.out && styles.disabled)}>
      <Link to={`/item/${code}`}>
        <img src={image} className={styles.photo} alt="изображение товара" />
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
        <button className={styles.addButton} onClick={addToCart}>
          <img src={icon} alt="иконка корзины" />
        </button>
      </div>
      {getLabel()}
    </div>
  )
}

export default Item
