import React from 'react'
import { Link } from 'gatsby'

import styles from './menu.module.css'

const menuConfig = [
  {
    name: 'ГЛАВНАЯ',
    link: '/'
  },
  {
    name: 'КАТАЛОГ',
    link: '/catalog'
  },
  // {
  //   name: 'СТАТЬИ',
  //   link: '#'
  // },
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
        <Link href={link}>
          {name}
        </Link>
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