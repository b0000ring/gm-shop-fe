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
        key={item.node.id}
        id={item.node.id}
        image={item.node.images[0].mini}
        name={item.node.name}
        price={item.node.price}
        newPrice={item.node.newPrice}
        itemData={item.node}
      />
     ))
  }
  return (
    <div className={styles.itemsList}>
      <div className={styles.title}>
        { link ? (
          <div className={styles.groupTitle}>
            <Link to={link}>{title}</Link>
            <Link to={link}>Посмотреть все</Link>
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
