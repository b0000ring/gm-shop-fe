import React, { useState, useEffect } from "react"
import clsx from 'clsx'
import { navigate, Link } from 'gatsby'
import Layout from "src/components/layout"
import SEO from "src/components/seo"
import BasketItem from 'src/components/common/basketItem'
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

  function getItemsCount() {
    let total = 0
    items.forEach(item => total += item.count)
    return total
  }

  function getDelveryPrice() {
    return orderData.delivery === 'spb' ? 200 : 400
  }

  function getDeliveryType() {
    let type = null
    if(orderData.delivery === 'spb') {
      type = {
        colors: [{
          value: 'default',
          label: ''
        }],
        images: [
          {
            thumbnail: '/images/car.svg'
          }
        ],
        name: 'Доставка по СПБ',
        price: 200,
        id: '999999',
      }
    } else if(orderData.delivery === 'rf') {
     type = {
        name: 'Доставка по РФ',
        colors: [{
          value: 'default',
          label: ''
        }],
        images: [
          {
            thumbnail: '/images/car.svg'
          }
        ],
        price: 400,
        id: '999998',
      }
    }

    return  type && <BasketItem className={styles.deliveryType} orderInfo={{ count: 1, color: 'default' }} itemData={type} />
  }

  function submitForm(data) {
    setIsSubmited(true)
    setOrderData(data)
  }

  function getButton() {
    if (typeof window === 'undefined') {
      return null;
    }
    return <button disabled={getItemsCount() ? false : true} className={clsx(styles.button, getItemsCount() ? '' : styles.disabled)} onClick={() => setIsCorrect(true)}>Оформить заказ</button>
  }

  function onPayClick() {
    const url = '/api/order'
    const options = {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: {
          ...orderData,
          deliveryPrice: getDelveryPrice()
        },
        items
      })
    }

    fetch(url, options)
    .then(resp => resp.json())
    .then(resp => {
      if(resp.url) {
        window.location = resp.url
      }
    })
    .catch(err => {
      navigate('/error')
    })
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
              <div><span>Доставка:</span><span>{orderData.delivery === 'spb' ? 'По Санкт Петербургу' : 'По Росии'}</span></div>
              <div><span>Адрес:</span><span>{orderData.address}</span></div>
              <div><span>Индекс:</span><span>{orderData.postIndex}</span></div>
              <div><span>Имя:</span><span>{orderData.name}</span></div>
              <div><span>Фамилия:</span><span>{orderData.surname}</span></div>
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
                    {getDeliveryType()}
                  </tbody>
                </table>
                <div className={styles.total}>
                  <div>
                    {getItemsCount()} товара
                  </div>
                  <div className={styles.finalPrice}>
                    Итого: <span>{cartController.getTotalSum() + getDelveryPrice()} ₽</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <button className={clsx(styles.buttonReverse)} onClick={() => setIsSubmited(false)}>Изменить данные</button>
            <button className={styles.button} onClick={() => onPayClick()}>Оплатить</button>
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
          <OrderForm data={orderData} onSubmit={submitForm} />
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
              {getButton()}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Layout> 
      <SEO title="Корзина" />
      <div className="content">
        {getComponent()}
      </div>
    </Layout>
  )
}

export default Basket
