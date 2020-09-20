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
      <div className={styles.divider}/>
    </>
  )
}

function Menu() {
  return (
    <menu className={styles.menu}>
      <div className={styles.divider}/>
      {menuConfig.map(item => <MenuItem key={item.name} data={item} />)}
    </menu>
  )
}

export default Menu