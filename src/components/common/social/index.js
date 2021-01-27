import React from 'react'
import { SocialIcon } from 'react-social-icons'

import styles from './index.module.css'

function Social() {
  return (
    <div className={styles.icons}>
      <SocialIcon target="_blank" url="http://vk.com/minibitshop" />
      <SocialIcon target="_blank" url="http://instagram.com/minibit.shop" />
      {/*<SocialIcon url="http://twitter.com" />
      <SocialIcon url="http://youtube.com" />*/}
    </div>
  )
}

export default Social
