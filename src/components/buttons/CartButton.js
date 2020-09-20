import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import styles from './cartButton.module.css'

function CartButton() {
  return (
    <button className={styles.cartButton}>
      <FontAwesomeIcon icon={faShoppingCart} />
      Корзина
    </button>
  )
}

export default CartButton