import React from "react"
import { Link } from "gatsby"

import Layout from "src/components/layout"
import SEO from "src/components/seo"
import clsx from 'clsx'

import styles from "./about.module.css"
import Social from '../components/common/social'

const Delivery  = () => (
  <Layout> 
    <SEO title="Доставка и оплата" />
    <div className={clsx('content', styles.about)}>
      <h1>Доставка и оплата</h1>
      <h3>Оплата</h3>
      <p>
        Оплата осуществляется с помощью сервиса оплаты банка Тинькофф, который предоставляет защиту ваших данных. Minibit не получает и не хранит предоставляемую Вами платежную информацию. 
      </p>
      <h3>Доставка</h3>
      <p>
        Доставка по СПб осуществляется курьерской службой в течение 1-2 дней с момента заказа.<br />
        Доставка по России осуществляется почтой России. Точную стоимость доставки Вы узнаёте в момент оплаты заказа.
      </p>
      <h3>Отслеживание</h3>
      <p>
        Если вы заказали доставку по России, то отследить отправление <br /> можно по ссылке (трэк номер будет выслан Вам после оплаты заказа) <Link href="https://www.pochta.ru/tracking" target="_blank">https://www.pochta.ru/tracking</Link><br />
      </p>
      <h3>Возврат и гарантия</h3>
      <p>
        После покупки товара у Вас есть две недели на возврат и обмен в случае, если с товаром что-то не так или вам не понравился (при сохранении товарного вида). Если вы хотите вернуть товар, свяжитесь, пожалуйста, с нами.
      </p>
      <h3>Остались вопросы?</h3>
      <p>
        Для уточнения информации Вы всегда можете <Link href="/contacts">связаться с нами</Link> в рабочее время
      </p>
    </div>
  </Layout>
)

export default Delivery
