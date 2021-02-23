import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from 'src/components/layout'
import SEO from "src/components/seo"
import ItemsList from 'src/components/common/itemsList'

import heartIcon from './heart.svg'
import carIcon from './car.svg'
import lampIcon from './lamp.svg'
import locationIcon from './location.svg'
import styles from './index.module.css'
import banner from './banner.png'

const IndexPage = ({ data }) => { 
  const collection = data.collection.edges[0].node.value
  const items = data.items.edges
  return (
    <Layout> 
      <SEO title="Главная" />
      <div className={styles.banner}>
        <Link to="/catalog">
          <img src={banner} alt="баннер с распродажей" />
        </Link>
      </div>
      <div className="content">
        <ItemsList collection={collection} items={items} title="Новые поступления" />
      </div>
      <div className={styles.all}>
        <Link to="/catalog">
          ПОСМОТРЕТЬ ВСЕ ТОВАРЫ
        </Link>
      </div>
      <div className="content">
        <div className={styles.about}>
          <div>
            <h2>
              Почему CYBERGEEK?
            </h2>
            <p>
              CYBERGEEK - интернет-магазин портативной цифровой электроники и аксессуаров.
              Мы работаем, чтобы сделать интересные и необычные устройства более доступными.
              В магазине CYBERGEEK Вы можете приобрести интересующие Вас товары без длительного ожидания почтовой доставки<br />  из-за рубежа.<br /> 
              Узнать подробности или задать вопросы Вы можете  по телефону или написав нам на почту. 
            </p>
            <Link to="/about">
              Подробнее о нас
            </Link>
          </div>
          <div>
            <div className={styles.line}>
              <div className={styles.section}>
                <img src={locationIcon} alt="иконка локации" /> Мы находимся <br /> в Санкт-Петербурге
              </div>
              <div className={styles.section}>
                <img src={heartIcon} alt="иконка скидок" /> Регулярные скидки <br /> и акции
              </div>
            </div>
            <div className={styles.line}>
              <div className={styles.section}>
                <img src={carIcon} alt="иконка доставки" /> Быстрая доставка <br /> по России
              </div>
              <div className={styles.section}>
               <img src={lampIcon} alt="иконка гарантий" /> Чек и гарантия на все товары 
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
    items: allMongodbCybergeekItems {
      edges {
        node {
          characteristics
          equipment
          images {
            original
            thumbnail
            mini
          }
          colors {
            label
            value
          }
          id
          code
          features
          name
          price
          out
          newPrice
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
