import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

import CartButton from 'src/components/buttons/CartButton'
import * as cartController from 'src/controllers/cartController'
import MiniCart from 'src/components/common/miniCart'
import getItemsWord from "src/utils/getItemsWord"

import styles from './cartInfo.module.css'

const name = 'cart_info'

function CartInfo() {
  const [, setState] = useState({})
  const [isShowMiniCart, setIsShowMiniCart] = useState(false)
  const items = cartController.getItems()
  
  useEffect(() => {
    cartController.subscribe(name, () => setState({}))
    return () => cartController.unsubscribe(name)
  }, [])

  return (
    <div tabIndex={0} role="button" onMouseEnter={() => setIsShowMiniCart(true)} onMouseLeave={() => setIsShowMiniCart(false)} className={styles.wrapper}>
      <Link to="/basket" className={styles.cartInfo}> 
        <CartButton/>
        <div>
          {cartController.getTotalSum()} ₽
        </div>
        <div>/</div>
        <div>
          {items.length} {getItemsWord(items.length)}
        </div>
      </Link>
      <div className={styles.cartMiniWrapper}>
        {isShowMiniCart && <MiniCart />}
      </div>
    </div>
  )
}

export default CartInfo
