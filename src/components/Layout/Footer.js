import React from 'react'
import styles from './footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <span>Copyright © 2020</span>
        <span>Магазин портативной цифровой электроники MINIBIT (И.П. Чиркин А.О.)</span>
      </div>
      <div>Данный сайт носит исключительно информационный характер и ни при каких обстоятельствах не является публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса РФ.</div>
    </footer>
  )
}

export default Footer