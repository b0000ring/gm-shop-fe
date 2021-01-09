import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery'
import { graphql } from "gatsby"

import Layout from 'src/components/layout'
import SEO from 'src/components/seo'
import Tabs from 'src/components/common/tabs'
import * as cartController from 'src/controllers/cartController'
import Counter from 'src/components/common/counter'

import styles from './item.module.css'
import icon from 'src/components/common/item/icon.svg'

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
      content: <ul>{itemData.features.map(item => <li>{item}</li>)}</ul>
    },
    {
      label: 'Характеристики',
      content: <ul>{itemData.characteristics.map(item => <li>{item}</li>)}</ul>
    },
    {
      label: 'Комплектация',
      content: <ul>{itemData.equipment.map(item => <li>{item}</li>)}</ul>
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
      <div className="content">
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
            <div className={styles.code}>
              Артикул {itemData.id} 
            </div>
            <div className={styles.config}>
              <div className={styles.color}>
                <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                  {getColors()}
                </select>
              </div>
              <Counter number={count} onChange={(number) => setCount(number)} />
            </div>
            <div className={styles.price}>
              <span>
                {itemData.newPrice || itemData.price} ₽
              </span>
              <span>
                {itemData.newPrice ? `${itemData.price} ₽` : null}
              </span>
            </div>
            <button className={styles.addToCart} onClick={addToCart}><img src={icon} /> В корзину</button>
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
