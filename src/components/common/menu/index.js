import React from 'react'
import { Link } from 'gatsby'

import styles from './menu.module.css'
import menuConfig from '../../../constants/menuConfig'

function MenuItem({ data: {name, link} }) {
  
  const isCurrent = typeof window !== `undefined` && window.location.pathname === link;
  return ( 
    <>
      <div className={`${styles.menuItem} ${isCurrent && styles.active}`}>
        <Link href={link}>
          {name}
        </Link>
      </div>
    </>
  )
}

function Menu({ filter  }) {
  return (
    <menu className={styles.menu}>
      {menuConfig.filter(filter).map((item, i) => (
        <>
          <MenuItem key={item.name} data={item} />
        </>
      ))}
    </menu>
  )
}

Menu.defaultProps = {
  filter: () => true
}

export default Menu