import React from "react"
import { Link } from "gatsby"

import Layout from "src/components/layout"
import SEO from "src/components/seo"
import clsx from 'clsx'

import styles from "./result.module.css"
import Social from '../components/common/social'

const Success = () => (
  <Layout> 
    <SEO title="Оплата не прошла" />
    <div className={clsx('content', styles.result, styles.error)}>
      <h1>Оплата не прошла</h1>
      <h3>Ваш заказ не был сформирован</h3>
      <p>
        Вы можете попробовать оформить заказ снова<br />
        Или связаться с нами<br />
        Для этого перейдите в корзину или на страницу контактов
      </p>
      <div>
        <Link href="/basket">
          Вернуться в корзину
        </Link>
        <Link href="/contacts">
          Связаться с нами
        </Link>
      </div>
    </div>
  </Layout>
)

export default Success
