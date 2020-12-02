import React from 'react'

import styles from './index.module.css'

function BasketItemShort({ orderInfo, itemData }) {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={itemData.images[0].thumbnail}/>
      </div>
      <div className={styles.info}>
        <div className={styles.name}>
          {itemData.name}
        </div>
        <div>
          {itemData.colors.find(item => item.value === orderInfo.color).label}
        </div>
        <div>
          {orderInfo.count}
        </div>
        <div>
          {orderInfo.count * itemData.price} руб.
        </div>
      </div>
    </div>
  )
}

export default BasketItemShort
