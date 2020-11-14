import React from 'react'
import { Link } from 'gatsby'

import Item from 'src/components/common/item'

import styles from './index.module.css'

function ItemsList({ items, title, link }) {
  function getItems() {
    return items.map(item => <Item {...item} />)
  }
  return (
    <div className={styles.itemsList}>
      <div className={styles.title}>
        {link ? <Link href={link}>{title}</Link> : title}
      </div>
      <div className={styles.list}>
       {getItems()}
      </div>
    </div>
  )
}

export default ItemsList
