import React from 'react'
import clsx from 'clsx'

import * as cartController from 'src/controllers/cartController'

import icon from './cross.svg'
import styles from './index.module.css'

function BasketItem({ orderInfo, itemData, className }) {
  function removeItem() {
    cartController.removeItem(itemData.id)
  }

  return (
    <tr className={clsx(styles.item, className)}>
      <td className={styles.image}>
        <img src={itemData.images[0].thumbnail} alt="изображение товара"/>
      </td>
      <td className={styles.name}>
        <div>
          <span>Артикул {itemData.code}</span>
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
        <button onClick={removeItem}><img src={icon} alt="иконка удаления товара" /></button>
      </td>
    </tr>
  )
}

export default BasketItem
