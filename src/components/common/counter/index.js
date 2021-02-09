import React from 'react'

import styles from './index.module.css'

function Counter({ onChange, number }) {
  function changeCount(step) {
    const newCount = parseInt(number) + step
    if(newCount > 0 && newCount <= 9) {
      onChange(newCount)
    }
  }

  return (
    <div className={styles.counter}>
      <button className={styles.button} onClick={() => changeCount(-1)}>
        -
      </button>
      <div>
        <input disabled value={number} />
      </div>
      <button className={styles.button} onClick={() => changeCount(+1)}>
        +
      </button>
    </div>
  )
}

export default Counter

