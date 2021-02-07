import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"

import Layout from "src/components/layout"
import SEO from "src/components/seo"
import clsx from 'clsx'

import styles from "./result.module.css"
import * as cartController from 'src/controllers/cartController'

const Success = () => {
  const [id, setId] = useState(null)

  function getStatus() {
    fetch('/api/status', {
      mode: 'cors',
      credentials: 'include',
    })
      .then(resp => resp.json())
      .then((data) => {
        if(data.isConfirmed) {
          setId(data.id)
          cartController.clear()
        } else {
          setTimeout(getStatus, 1000)
        }
      })
      .catch(() => {
        navigate('/error')
      })
  }

  useEffect(() => {
    getStatus()
  }, [])

  return (
    <Layout> 
      <SEO title="Успешная оплата" />
      <div className={clsx('content', styles.result)}>
        {!id ? (
          <h1>Загрузка...</h1>
        ) : (
          <>
            <h1>Спасибо за покупку!</h1>
            <h3>Ваш заказ <span>#{id}</span></h3>
            <p>
              Ваш заказ принят в обработку.<br />
              Как только он будет подтвержден, на указанный Вами адрес электронной почты придет письмо<br />
              с подробной информацией о доставке и статусе заказа.
            </p>
            <Link href="/catalog">
              Каталог товаров
            </Link>
          </>
        )}
      </div>
    </Layout>
  )
}

export default Success
