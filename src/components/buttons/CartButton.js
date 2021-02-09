import React from 'react'

import icon from './Cart.svg'
import styles from './cartButton.module.css'

function CartButton() {
  return (
    <img src={icon} className={styles.cartButton} alt="иконка корзины" />
  )
}

export default CartButton
