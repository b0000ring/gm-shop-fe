import React from 'react'
import clsx from 'clsx'

import styles from './button.module.css'

function Button({children, reverse, className, ...props}) {
  return (
    <button className={clsx(styles.button, className, reverse && styles.reverse)} {...props}>{children}</button>
  )
}

export default Button