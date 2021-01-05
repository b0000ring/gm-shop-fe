import React, { useState  } from 'react'
import { Link  } from 'gatsby'

import items from 'src/constants/groupLabels'
import styles from './catalog.module.css'
import icon from './Menu.svg'

function Catalog() {

  const [isListVisible, setIsListVisible] = useState(false)
  
  function getList() {
    return Object.keys(items).map((key) => {
      return (
        <li>
          <Link href={`/catalog/${key}`}>
            {items[key]}
          </Link>
        </li>
      )
    }) 
  }

  return (
    <div
      onMouseEnter={() => {setIsListVisible(true)}}
      className={styles.catalogWrapper}
      onMouseLeave={() => {setIsListVisible(false)}}
    >
      <div className={styles.catalog}>
        <img src={icon} />
        Каталог
      </div>
      {isListVisible && (
        <div className={styles.catalogList}>
          <ul>
            {getList()}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Catalog

