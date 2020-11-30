import React from 'react'

import styles from './index.module.css'

function BasketItem({ orderInfo, itemData }) {
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
        Удалить
      </td>
    </tr>
  )
}

export default BasketItem
