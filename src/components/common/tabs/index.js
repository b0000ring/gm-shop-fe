import React, { useState } from 'react'
import clsx from 'clsx'

import styles from './index.module.css'

function Tabs({ tabs }) {

  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        {tabs.map((item, i) => {
          return (
            <button onClick={() => {setSelectedTab(i)}} className={clsx(styles.tab, (i === selectedTab) && styles.active)}>
              {item.label}
            </button>
          )
        })}
      </div>
      <div className={styles.content}>
        {tabs[selectedTab].content}
      </div>
    </div>
    
  )
}

export default Tabs