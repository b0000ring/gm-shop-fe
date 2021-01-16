import React from "react"
import { Link } from "gatsby"

import Layout from "src/components/layout"
import SEO from "src/components/seo"
import clsx from 'clsx'

import styles from "./about.module.css"
import Social from '../components/common/social'

const Delivery  = () => (
  <Layout> 
    <SEO title="Delivery" />
    <div className={clsx('content', styles.about)}>
      <h1>Доставка и оплата</h1>
      <h3>Оплата</h3>
      <p>
        Оплата осуществляется с помощью сервиса CloudPayments, который предоставляет защиту ваших данных. Minibit не получает и не хранит предоставляемую Вами платежную информацию. 
      </p>
      <h3>Доставка</h3>
      <p>
        Доставка по СПб осуществляется курьерской службой в течение 1-2 дней с момента заказа.<br />
        Доставка по России осуществляется почтой России или курьером службы СДЭК. Точную стоимость доставки Вы узнаёте в момент оплаты заказа.
      </p>
      <h3>Отслеживание</h3>
      <p>
        Если вы заказали почтой России, то переходите по ссылке <Link href="https://www.pochta.ru/tracking" target="_blank">https://www.pochta.ru/tracking</Link><br />
        Если вы заказали службой СДЭК, то переходите по ссылке <Link href="https://www.cdek.ru/ru/tracking" target="_blank">https://www.cdek.ru/ru/tracking</Link>
      </p>
      <h3>Остались вопросы?</h3>
      <p>
        Для уточнения информации Вы всегда можете <Link href="/contacts">связаться с нами</Link> в рабочее время
      </p>
    </div>
  </Layout>
)

export default Delivery
