import React from 'react'
import { SocialIcon } from 'react-social-icons'

import styles from './index.module.css'

function Social() {
  return (
    <div className={styles.icons}>
      <SocialIcon url="http://vk.com/minibitshop" />
      <SocialIcon url="http://instagram.com/minibit.shop" />
      {/*<SocialIcon url="http://twitter.com" />
      <SocialIcon url="http://youtube.com" />*/}
    </div>
  )
}

export default Social
