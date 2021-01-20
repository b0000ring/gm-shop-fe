import React, { useState, useEffect } from "react"
import clsx from 'clsx'
import { Link } from 'gatsby'
import Layout from "src/components/layout"
import SEO from "src/components/seo"
import BasketItem from 'src/components/common/basketItem'
import BasketItemShort from 'src/components/common/basketItemShort'
import OrderForm from 'src/forms/order'
import * as cartController from 'src/controllers/cartController'

import styles from './basket.module.css' 

const name = 'basket'

const Basket = () => {
  //hack to force component update
  const [updateState, setUpdateState] = useState({})
  const [isCorrect, setIsCorrect] = useState(false)
  const [isSubmited, setIsSubmited] = useState(false)
  const items = cartController.getItems()
  const [orderData, setOrderData] = useState({})

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

  function getItemsCount() {
    let total = 0
    items.forEach(item => total += item.count)
    return total
  }

  function submitForm(data) {
    setIsSubmited(true)
    setOrderData(data)
  }

  function getComponent() {
    if(isSubmited) {
      return (
        <div>
          <div className={styles.header}>
            <h2 className={styles.title}>Подтверждение заказа</h2>
          </div>
          <div className={styles.checkout}>
            <div className={clsx(styles.section, styles.info)}>
              <h4>Информация для доставки</h4>
              <div><span>Имя:</span><span>{orderData.name}</span></div>
              <div><span>Фамилия:</span><span>{orderData.surname}</span></div>
              <div><span>Адрес:</span><span>{orderData.address}</span></div>
              <div><span>Индекс:</span><span>{orderData.postIndex}</span></div>
              <div><span>Телефон:</span><span>{orderData.phone}</span></div>
              <div><span>E-mail:</span><span>{orderData.email}</span></div>
              <div><span>Комментарий:</span><span>{orderData.comment}</span></div>
            </div>
            <div className={styles.section}>
              <h4>Выбранные товары</h4>
              <div className={clsx(styles.miniTableWrapper, styles.tableWrapper)}>
                <table className={styles.table}>
                  <tbody>
                    {getItems()}
                  </tbody>
                </table>
                <div className={styles.total}>
                  <div>
                    {getItemsCount()} товара
                  </div>
                  <div className={styles.finalPrice}>
                    Итого: <span>{cartController.getTotalSum()} ₽</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <button className={clsx(styles.buttonReverse)} onClick={() => setIsSubmited(false)}>Изменить данные</button>
            <button className={styles.button} onClick={() => setIsCorrect(true)}>Оплатить</button>
          </div>
        </div>
      )
    } else if(isCorrect) {
      return (
        <div>
          <div className={styles.header}>
            <h1 className={styles.title}>
              Оформление заказа
            </h1>
          </div>
          <OrderForm onSubmit={submitForm} />
        </div>    
      )
    }
    return (
      <div>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Моя корзина
          </h1>
          <Link href="/catalog" className={styles.back}>
            Вернуться к покупкам
          </Link>
        </div>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <tbody>
              {getItems()}
            </tbody>
          </table>
          <div className={styles.total}>
            <div>
              В корзине {getItemsCount()} товара
            </div>
            <div className={styles.finalPrice}>
              Итого: <span>{cartController.getTotalSum()} ₽</span>
              <button disabled={getItemsCount() === 0} className={clsx(styles.button, (getItemsCount() === 0) && styles.disabled)} onClick={() => setIsCorrect(true)}>Оформить заказ</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Layout> 
      <SEO title="Basket" />
      <div className="content">
        {getComponent()}
      </div>
    </Layout>
  )
}

export default Basket
