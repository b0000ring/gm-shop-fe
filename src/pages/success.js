import React from "react"
import { Link } from "gatsby"

import Layout from "src/components/layout"
import SEO from "src/components/seo"
import clsx from 'clsx'

import styles from "./result.module.css"
import Social from '../components/common/social'

const Success = () => (
  <Layout> 
    <SEO title="Success" />
    <div className={clsx('content', styles.result)}>
      <h1>Спасибо за покупку!</h1>
      <h3>Ваш заказ <span>#123456789</span></h3>
      <p>
        Ваш заказ принят в обработку.<br />
        Как только он будет подтвержден, на указанный Вами адрес электронной почты придет письмо<br />
        с подробной информацией о доставке и статусе заказа.
      </p>
      <Link href="/catalog">
        Каталок товаров
      </Link>
    </div>
  </Layout>
)

export default Success
