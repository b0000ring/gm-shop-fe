import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

import CartButton from 'src/components/buttons/CartButton'
import * as cartController from 'src/controllers/cartController'
import MiniCart from 'src/components/common/miniCart'

import styles from './cartInfo.module.css'

const name = 'cart_info'

function CartInfo() {
  const [state, setState] = useState({})
  const [isShowMiniCart, setIsShowMiniCart] = useState(false)
  const items = cartController.getItems()
  
  useEffect(() => {
    cartController.subscribe(name, () => setState({}))
    return () => cartController.unsubscribe(name)
  }, [])

  return (
    <div onMouseEnter={() => setIsShowMiniCart(true)} onMouseLeave={() => setIsShowMiniCart(false)} className={styles.wrapper}>
      <Link href="/basket" className={styles.cartInfo}> 
        <CartButton/>
        <div>
          {cartController.getTotalSum()} ₽
        </div>
        <div>/</div>
        <div>
          {items.length} товаров
        </div>
      </Link>
      <div className={styles.cartMiniWrapper}>
        {isShowMiniCart && <MiniCart />}
      </div>
    </div>
  )
}

export default CartInfo
