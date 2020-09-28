import React from 'react'

import styles from './menu.module.css'

const menuConfig = [
  {
    name: 'ГЛАВНАЯ',
    link: '#'
  },
  {
    name: 'КАТАЛОГ',
    link: '#'
  },
  {
    name: 'СТАТЬИ',
    link: '#'
  },
  {
    name: 'О НАС',
    link: '#'
  },
  {
    name: 'КОНТАКТЫ',
    link: '#'
  }
]

function MenuItem({ data: {name, link} }) {
  return (
    <>
      <div className={styles.menuItem}>
        <a href={link}>
          {name}
        </a>
      </div>
    </>
  )
}

function Menu() {
  return (
    <menu className={styles.menu}>
      {menuConfig.map((item, i) => (
        <>
          <MenuItem key={item.name} data={item} />
          {i !== menuConfig.length - 1 &&  <div className={styles.divider}/>}
        </>
      ))}
    </menu>
  )
}

export default Menu