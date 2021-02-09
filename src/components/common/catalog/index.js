import React, { useState  } from 'react'
import { Link  } from 'gatsby'
import clsx from 'clsx'

import items from 'src/constants/groupLabels'
import styles from './catalog.module.css'
import icon from './Menu.svg'

function Catalog() {

  const [isListVisible, setIsListVisible] = useState(false)
  
  function getList() {
    return Object.keys(items).map((key, i) => {
      return (
        <li key={key}>
          <Link to={`/catalog/${key}`}>
            {items[key]}
          </Link>
        </li>
      )
    }) 
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onMouseEnter={() => {setIsListVisible(true)}}
      className={styles.catalogWrapper}
      onMouseLeave={() => {setIsListVisible(false)}}
    >
      <Link to="/catalog" className={styles.catalog}>
        <img src={icon} alt="иконка меню" />
        Каталог
      </Link>
        <div className={clsx(styles.catalogList, !isListVisible && styles.hidden)}>
          <ul>
            {getList()}
          </ul>
        </div>
    </div>
  )
}

export default Catalog

