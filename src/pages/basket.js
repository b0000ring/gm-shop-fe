import React, { useState, useEffect } from "react"
import clsx from 'clsx'

import Layout from "src/components/layout"
import SEO from "src/components/seo"
import BasketItem from 'src/components/common/basketItem'
import BasketItemShort from 'src/components/common/basketItemShort'
import OrderForm from 'src/forms/order'
import * as cartController from 'src/controllers/cartController'

import styles from './basket.module.css' 

const testInfo = {
  address: "ул Попова, д 2, кв 100",
  comment: "Позвоните, как будете по адресу",
  email: "hello@alexchirkin.me",
  name: "Александр",
  phone: "+79955231123",
  postIndex: "197000",
  surname: "Чиркин",
}

const name = 'basket'

const Basket = () => {
  //hack to force component update
  const [updateState, setUpdateState] = useState({})
  const [isCorrect, setIsCorrect] = useState(false)
  const [isSubmited, setIsSubmited] = useState(false)
  const items = cartController.getItems()

  useEffect(() => {
    cartController.subscribe(name, () => setUpdateState({}))
    return () => cartController.unsubscribe(name)
  }, [])

  function getItems() {
    return items.map(item => <BasketItem orderInfo={item} itemData={item.data} />)
  }

  function getShortItems() {
    return items.map(item => <BasketItemShort orderInfo={item} itemData={item.data} />)
  }

  function getComponent() {
    if(isSubmited) {
      return (
        <div>
          <h2>Подтверждение информации для заказа</h2>
          <div className={styles.checkout}>
            <div className={styles.section}>
              <h4>Информация для доставки</h4>
              <div>Имя: <span>{testInfo.name}</span></div>
              <div>Фамилия: <span>{testInfo.surname}</span></div>
              <div>Адрес: <span>{testInfo.address}</span></div>
              <div>Телефон: <span>{testInfo.phone}</span></div>
              <div>E-mail: <span>{testInfo.email}</span></div>
              <div>Почтовый индекс: <span>{testInfo.postIndex}</span></div>
              <div>Комментарий: <span>{testInfo.comment}</span></div>
            </div>
            <div className={styles.section}>
              <h4>Выбранные товары</h4>
              {getShortItems()}
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <button className={clsx(styles.button, styles.resetButton)} onClick={() => setIsSubmited(false)}>Изменить данные</button>
            <button className={styles.button} onClick={() => setIsCorrect(true)}>Перейти к онлайн-оплате</button>
          </div>
        </div>
      )
    } else if(isCorrect) {
      return <OrderForm onSubmit={() => setIsSubmited(true)} />
    }
    return (
      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td></td>
              <td>Наименование</td>
              <td>Цвет</td>
              <td>Количество</td>
              <td>Цена</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {getItems()}
          </tbody>
        </table>
        <div className={styles.total}>
          <div>
            Итого: <span>{cartController.getTotalSum()} руб.</span>
          </div>
          <button className={styles.button} onClick={() => setIsCorrect(true)}>Перейти к оформлению</button>
        </div>
      </div>
    )
  }

  return (
    <Layout> 
      <SEO title="Basket" />
      {getComponent()}
    </Layout>
  )
}

export default Basket
