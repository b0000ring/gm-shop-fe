import React from 'react'

import styles from './item.module.css'

function Item({ data }) {
  console.log(data)
  function getColor() {
    const color = data.data.colors.find(item => item.value === data.color)
    return color.label
  }
  return (
    <div className={styles.item}>
      <div className={styles.photo}>
        <img src={data.data.images[0].thumbnail} />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>
          {data.data.name}
        </div>
        <div className={styles.color}>
          {getColor()}
        </div>
        <div className={styles.price}>
          {data.data.price} ₽
        </div>
      </div>
    </div>
  )
}

export default Item

