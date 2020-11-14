import React from 'react'
import { Link } from 'gatsby'


import CartButton from 'src/components/buttons/CartButton'
import styles from './cartInfo.module.css'

function CartInfo() {
  return (
    <div className={styles.cartInfo}>
      <Link href='#'>
        6 товаров
      </Link>
      <div>|</div>
      <div>
        3745 руб.
      </div>
      <CartButton/>
    </div>
  )
}

export default CartInfo