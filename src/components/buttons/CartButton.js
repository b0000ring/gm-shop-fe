import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import styles from './cartButton.module.css'

function CartButton() {
  return (
    <Link className={styles.link} href='#'>
      <button className={styles.cartButton}>
        <FontAwesomeIcon icon={faShoppingCart} />
        Корзина
      </button>
    </Link>
  )
}

export default CartButton