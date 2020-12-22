import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery'
import { graphql } from "gatsby"

import Layout from 'src/components/layout'
import SEO from 'src/components/seo'
import Tabs from 'src/components/common/tabs'
import * as cartController from 'src/controllers/cartController'

import styles from './item.module.css'

const Item = ({ data }) => {
  const itemData = data.allDataJson.edges[0].node
  const [selectedColor, setSelectedColor] = useState(itemData.colors[0].value)
  const [count, setCount] = useState(1)
  const tabs = [
    {
      label: 'Описание',
      content: itemData.text.map(item => <p>{item}</p>)
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

  function getColors() {
    return itemData.colors.map(item => {
      return <option value={item.value}>{item.label}</option>
    })
  }

  function addToCart() {
    cartController.addItem(itemData, count, selectedColor)
  }

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
              <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                {getColors()}
              </select>
            </div>
            <div className={styles.cart}>
              <div>
                <label>Количество</label>
                <input value={count} min="1" max="99" onChange={e => setCount(e.target.value)} type="number" />
              </div> 
              <button onClick={addToCart}>Добавить в корзину</button>
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
  }
`

export default Item
