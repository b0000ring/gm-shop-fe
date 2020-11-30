import React, { useState } from "react"

import Layout from "src/components/layout"
import SEO from "src/components/seo"
import BaksetItem from 'src/components/common/basketItem'
import OrderForm from 'src/forms/order'
import styles from './basket.module.css'

const items = [
  {
    id: '00001',
    count: 1,
    color: 'grey',
  },
  {
    id: '00002',
    count: 2,
    color: 'grey',
  },
  {
    id: '00003',
    count: 1,
    color: 'grey',
  }
]

const testData = {
  images: [
    {
      original: '/test.PNG',
      thumbnail: '/test.PNG',
    },
    {
      original: '/test.PNG',
      thumbnail: '/test.PNG',
    },
    {
      original: '/test.PNG',
      thumbnail: '/test.PNG',
    }
  ],
  name: 'BittBoy',
  price: 1020,
  colors: [
    {
      label: 'серый',
      value: 'grey'
    }
  ],
  id: '00001',
}

const Basket = () => {
  function getItems() {
    return items.map(item => <BaksetItem orderInfo={item} itemData={testData} />)
  }

  const [isCorrect, setIsCorrect] = useState(false)

  return (
    <Layout> 
      <SEO title="Bin" />
      {isCorrect ? 
          <OrderForm />
        : (
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
                Итого: <span>{items.reduce((acc, val) => acc + testData.price * val.count, 0)} руб.</span>
              </div>
              <button onClick={() => setIsCorrect(true)}>Перейти к оформлению</button>
            </div>
          </div>
        )
      }
     
    </Layout>
  )
}

export default Basket
