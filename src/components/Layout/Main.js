import React from 'react'

import styles from './main.module.css'

function Body({ children }) {
  return (
    <main className={styles.main}>
      {children}
    </main>
  )
}

export default Body