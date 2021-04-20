import React, { useState, useEffect } from 'react'
import { Link  } from 'gatsby'
import clsx from 'clsx'

import Menu from '../menu'
import items from 'src/constants/groupLabels'
import checkIsMobile from 'src/utils/isMobile'
import styles from './catalog.module.css'
import icon from './Menu.svg'

function Catalog() {

  const [isListVisible, setIsListVisible] = useState(false)
  const [showChild, setShowChild] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setShowChild(true)
    setIsMobile(checkIsMobile())
  }, [])
  
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

  if (!showChild) {
    return null
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onMouseEnter={() => {setIsListVisible(true)}}
      onClick={() => {setIsListVisible(true)}}
      className={styles.catalogWrapper}
      onMouseLeave={() => {setIsListVisible(false)}}
    >
      <Link to={!isMobile && "/catalog"} className={styles.catalog}>
        <img src={icon} alt="иконка меню" />
        Каталог
      </Link>
        <div className={clsx(styles.catalogList, !isListVisible && styles.hidden)}>
          {isMobile && <h2>Каталог</h2>}
          <ul>
            {getList()}
          </ul>
          {isMobile && (
            <div className={styles.mobileMenu}>
              <h2>Страницы</h2>
              <Menu filter={(item) => item.link !== '/catalog'}/>
            </div>
          )}
        </div>
    </div>
  )
}

export default Catalog

