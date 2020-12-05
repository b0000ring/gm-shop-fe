import React from 'react'
import ImageGallery from 'react-image-gallery'
import { graphql } from "gatsby"

import Layout from 'src/components/layout'
import SEO from 'src/components/seo'
import Tabs from 'src/components/common/tabs'

import styles from './item.module.css'

const Item = ({ data }) => {
  const itemData = data.allDataJson.edges[0].node
  console.log(itemData)
  const tabs = [
    {
      label: 'Описание',
      content: itemData.text
    },
    {
      label: 'Особенности',
      content: itemData.features.map(item => <li>{item}</li>)
    },
    {
      label: 'Характеристики',
      content: itemData.characteristics.map(item => <li>{item}</li>)
    },
    {
      label: 'Комплектация',
      content: itemData.equipment.map(item => <li>{item}</li>)
    },
  ]

  return (
    <Layout> 
      <SEO title="Item" />
      <div className={styles.page}>
        <div className={styles.main}>
          <div className={styles.photo}>
            <ImageGallery
              showPlayButton={false}
              items={itemData.images}
            />
          </div>
          <div className={styles.interactive}>
            <div className={styles.name}>
              {itemData.name}
            </div>
            <div className={styles.price}>
              {itemData.price} руб.
            </div>
            <div className={styles.color}>
              <label>Цвет</label>
              <select>
                <option>Серый</option>
              </select>
            </div>
            <div className={styles.cart}>
              <div>
                <label>Количество</label>
                <input type="number" />
              </div>
              
              <button>Добавить в корзину</button>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <Tabs tabs={tabs}/>
        </div>        
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    allDataJson(filter: {id: {eq: $id}}) {
      edges {
        node {
          characteristics
          equipment
          images {
            original
            thumbnail
          }
          id
          features
          name
          price
          text
        }
      }
    }
  }
`

export default Item
