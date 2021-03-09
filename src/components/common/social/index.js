import React from 'react'
import { SocialIcon } from 'react-social-icons'

import styles from './index.module.css'

function Social() {
  return (
    <div className={styles.icons}>
      <SocialIcon target="_blank" url="https://vk.com/cybergeekshop" />
      <SocialIcon target="_blank" url="https://instagram.com/cybergeek.shop" />
      <SocialIcon target="_blank" url="https://www.youtube.com/channel/UC_Ett5Cqo2HsUczrJkcwDww" />
    </div>
  )
}

export default Social
