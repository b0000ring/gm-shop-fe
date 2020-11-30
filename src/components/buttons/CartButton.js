import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'

import styles from './cartButton.module.css'

function CartButton() {
  return (
    <Link className={styles.link} href='/basket'>
      <button className={clsx(styles.cartButton, styles.active)}>
        <FontAwesomeIcon icon={faShoppingCart} />
        Корзина
      </button>
    </Link>
  )
}

export default CartButton