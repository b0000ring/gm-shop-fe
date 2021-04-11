import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery'
import { graphql } from "gatsby"
import clsx from 'clsx'

import Layout from 'src/components/layout'
import SEO from 'src/components/seo'
import Tabs from 'src/components/common/tabs'
import * as cartController from 'src/controllers/cartController'
import Counter from 'src/components/common/counter'
import Button from 'src/components/buttons/Button'

import styles from './item.module.css'
import './gallery.css'
import icon from 'src/components/common/item/icon.svg'

const Item = ({ data }) => {
  const itemData = data.allMongodbCybergeekItems.edges[0].node
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
      <SEO title={`Купить ${itemData.name}`} />
      <article className="content">
        <div className={styles.main}>
          <div className={styles.photo}>
            <ImageGallery
              slideDuration={100}
              showPlayButton={false}
              items={itemData.images}
            />
          </div>
          <div className={styles.interactive}>
            <h1 className={styles.name}>
              {itemData.name}
            </h1>
            <div className={styles.code}>
              Артикул {itemData.code} 
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
            <Button
              reverse
              disabled={itemData.out}
              className={clsx(styles.addToCart, itemData.out && styles.disabled)}
              onClick={addToCart}
            >
              <img src={icon} alt="" /> В корзину
            </Button>
          </div>
        </div>
        <div className={styles.info}>
          <Tabs tabs={tabs}/>
        </div>        
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($code: String!) {
    allMongodbCybergeekItems(filter: {code: {eq: $code}}) {
      edges {
        node {
          characteristics
          equipment
          newPrice
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
          out
          price
          text
        }
      }
    }
  }
`

export default Item
