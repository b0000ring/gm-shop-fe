import React from 'react'
import { Link, graphql } from 'gatsby'
import clsx from 'clsx'

import Layout from 'src/components/layout'
import SEO from "src/components/seo"
import ItemsList from 'src/components/common/itemsList'
import Banner from 'src/components/common/banner'

import styles from './index.module.css'

const IndexPage = ({ data }) => { 
  const collection = data.collection.edges[0].node.value
  const items = data.items.edges
  return (
    <Layout> 
      <SEO title="Home" />
      <div className="content">
        <ItemsList collection={collection} items={items} title="Новые поступления" />
      </div>
      <div className={styles.all}>
        <Link href="/catalog">
          ПОСМОТРЕТЬ ВСЕ ТОВАРЫ
        </Link>
      </div>
      <div className="content">
        <div className={styles.about}>
          <div>
            <h2>
              Почему МИНИБИТ?
            </h2>
            <p>
              Minibit - интернет-магазин портативной цифровой электроники и аксессуаров.
              Мы работаем, чтобы сделать интересные и необычные устройства более доступными.
              В магазине Minibit Вы можете приобрести редкие и интересующие Вас товары без длительного ожидания почтовой доставки из-за рубежа.<br /> 
              Узнать подробности или задать вопросы Вы можете  по телефону или написав нам на почту. 
            </p>
            <Link href="/about">
              Подробнее о нас
            </Link>
          </div>
          <div>
            <div className={styles.line}>
              <div className={styles.section}>
                <img src="/icons/location.svg" /> MINIBIT находится <br /> в Санкт-Петербурге
              </div>
              <div className={styles.section}>
                <img src="/icons/percent.svg" /> Регулярные скидки <br /> и акции
              </div>
            </div>
            <div className={styles.line}>
              <div className={styles.section}>
                <img src="/icons/truck.svg" /> Быстрая доставка <br /> по России
              </div>
              <div className={styles.section}>
               <img src="/icons/check.svg" /> Чек и гарантия на все товары 
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    items: allDataJson(filter: {type: {eq: "item"}}) {
      edges {
        node {
          characteristics
          equipment
          images {
            original
            thumbnail
          }
          colors {
            label
            value
          }
          id
          features
          name
          price
          text
        }
      }
    }
    collection: allDataJson(filter: {type: {eq: "collection"}, name: {eq: "new"}}) {
      edges {
        node {
          id
          value
        }
      }
    }
  }
`

export default IndexPage
