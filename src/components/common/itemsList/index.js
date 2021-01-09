import React from 'react'
import { Link } from 'gatsby'

import Item from 'src/components/common/item'

import styles from './index.module.css'

function ItemsList({ collection, items, title, link }) {
  function getItemsList() {
    const selected = collection.map(id => {
      return items.find(item => {
        if(item.node.id === id) {
          return true
        }

        return false
      })
    })

    return selected.map(item => (
      <Item
        id={item.node.id}
        image={item.node.images[0].original}
        name={item.node.name}
        price={item.node.price}
        itemData={item.node}
      />
     ))
  }
  return (
    <div className={styles.itemsList}>
      <div className={styles.title}>
        { link ? (
          <div className={styles.groupTitle}>
            <Link href={link}>{title}</Link>
            <Link href={link}>Посмотреть все</Link>
          </div>
        ) : title }
      </div>
      <div className={styles.list}>
       {getItemsList()}
      </div>
    </div>
  )
}

export default ItemsList
