import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'

import icon from './Cart.svg'
import styles from './cartButton.module.css'

function CartButton() {
  return (
    <img src={icon} className={styles.cartButton} />
  )
}

export default CartButton
