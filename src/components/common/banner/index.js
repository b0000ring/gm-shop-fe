import React from 'react'
import ImageGallery from 'react-image-gallery';

import styles from './index.module.css'

import "react-image-gallery/styles/css/image-gallery.css";

function Banner() {
  const images = [
    {
      original: '/banner_test.jpg',
      thumbnail: '/banner_test.jpg',
    },
    {
      original: '/banner_test.jpg',
      thumbnail: '/banner_test.jpg',
    },
    {
      original: '/banner_test.jpg',
      thumbnail: '/banner_test.jpg',
    }
  ]
  return (
    <div className={styles.banner}>
      <ImageGallery
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        items={images}
        showBullets
      />
    </div>
  )
}

export default Banner
