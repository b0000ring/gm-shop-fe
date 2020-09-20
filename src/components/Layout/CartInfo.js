import React from 'react'

import CartButton from 'src/components/buttons/CartButton'
import styles from './cartInfo.module.css'

function CartInfo() {
  return (
    <div className={styles.cartInfo}>
      <a href='#'>
        6 товаров
      </a>
      <div>|</div>
      <div>
        3745 руб.
      </div>
      <CartButton/>
    </div>
  )
}

export default CartInfo