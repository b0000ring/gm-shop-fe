import React from 'react'

import styles from './index.module.css'

function Counter({ onChange, number }) {
  function changeCount(step) {
    const newCount = parseInt(number) + step
    onChange(newCount >= 0 ? newCount : 0)
  }
  function setCount(value) {
    if(value >= 0 || value === '') {
      onChange(parseInt(value || 0, 10))
    }
  }
  return (
    <div className={styles.counter}>
      <div className={styles.button} onClick={() => changeCount(-1)}>
        -
      </div>
      <div>
        <input value={number} onChange={(e) => setCount(e.target.value)} />
      </div>
      <div className={styles.button} onClick={() => changeCount(+1)}>
        +
      </div>
    </div>
  )
}

export default Counter

