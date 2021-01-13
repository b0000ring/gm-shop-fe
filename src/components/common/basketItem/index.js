import React from 'react'

import * as cartController from 'src/controllers/cartController'

import icon from './cross.svg'
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
        <div>
          <span>Артикул {itemData.id}</span>
          {itemData.name}
        </div>
      </td>
      <td>
        {itemData.colors.find(item => item.value === orderInfo.color).label}
      </td>
      <td>
        {orderInfo.count}
      </td>
      <td className={styles.price}>
        <div>
          {itemData.newPrice || itemData.price} ₽
          <span>
            {itemData.newPrice ? `${itemData.price} ₽` : null}
          </span>
        </div>
      </td>
      <td className={styles.delete}>
        <div onClick={removeItem}><img src={icon} /></div>
      </td>
    </tr>
  )
}

export default BasketItem
