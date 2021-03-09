import React from 'react'
import { Link } from 'gatsby'

import * as cartController from 'src/controllers/cartController'
import Button from 'src/components/buttons/button'

import Item from './Item'
import styles from './index.module.css'

function MiniCart() {
  const items = cartController.getItems()
  const sum = cartController.getTotalSum() 
  function getItems() {
    return items.map((item) => {
      return (
        <Item data={item} />
      )
    })
  }

  return (
    <div className={styles.cartMini}>
      <div className={styles.top}>
        {getItems()}
      </div>
      <div className={styles.bottom}>
        <div className={styles.info}>
          <div>
            Итого
          </div>
          <div>
            {sum} ₽
          </div>
        </div>
        <Link to="/basket">
          <Button reverse className={styles.toCartButton}>
            Корзина
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default MiniCart

