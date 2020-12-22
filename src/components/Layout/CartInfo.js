import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

import CartButton from 'src/components/buttons/CartButton'
import * as cartController from 'src/controllers/cartController'

import styles from './cartInfo.module.css'

const name = 'cart_info'

function CartInfo() {
  const [state, setState] = useState({})
  const items = cartController.getItems()
  //fix this here 
  useEffect(() => {
    cartController.subscribe(name, () => setState({}))
    return () => cartController.unsubscribe(name)
  }, [])

  return (
    <div className={styles.cartInfo}>
      <Link href='/basket'>
        Выбрано товаров: {items.length}
      </Link>
      <div>|</div>
      <div>
        {cartController.getTotalSum()} руб.
      </div>
      <CartButton/>
    </div>
  )
}

export default CartInfo
