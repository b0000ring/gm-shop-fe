import React from 'react'

import * as cartController from 'src/controllers/cartController'

import styles from './index.module.css'

function BasketItem({ orderInfo, itemData }) {
  function removeItem() {
    cartController.removeItem(itemData.id)
  }

  return (
    <tr className={styles.item}>
      <td className={styles.image}>
        <img src={itemData.images[0].thumbnail}/>
      </td>
      <td className={styles.name}>
        {itemData.name}
      </td>
      <td>
        {itemData.colors.find(item => item.value === orderInfo.color).label}
      </td>
      <td>
        {orderInfo.count}
      </td>
      <td>
        {orderInfo.count * itemData.price} руб.
      </td>
      <td className={styles.delete}>
        <div onClick={removeItem}>Удалить</div>
      </td>
    </tr>
  )
}

export default BasketItem
