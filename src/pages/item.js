import React from 'react'
import ImageGallery from 'react-image-gallery'

import Layout from 'src/components/Layout'
import SEO from 'src/components/seo'
import Tabs from 'src/components/common/tabs'

import styles from './item.module.css'

const data = {
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
  price: '1020',
  colors: [
    {
      label: 'серый',
      value: 'grey'
    }
  ],
  id: '00001',
  text: 'Портативная консоль BittBoy – это возможность окунуться в мир любимых ретро-игр. Знакомый и удобный дизайн выполнен в духе лучших карманных консолей прошлых лет. Легкость, компактность, удобство – все это о BittBoy.',
  features: [
    'Встроенный аккумулятор',
    'Поддержка добавления игр на SD-карту',
    'Большое количество эмуляторов',
    'Огромная библиотека игр'
  ],
  characteristics: [
    'Материал – АБС пластик',
    'Размеры 6.8x9.9x1.3см',
    '2.4 дюйма IPS-экран',
    'Язык интерфейса – английский',
    'Порты: 3.5мм разьем для наушников, слот для SD карт, micro USB порт зарядки',
    'Поддерживаемые эмуляторы NES/GB/GBC/GBA/SNES/SMD/SMS/PCE/NEOGEO',
    '700мАч встроенный аккумулятор',
  ],
  equipment: [
    'Консоль BittBoy ',
    'USB кабель зарядки',
    'Руководство (на английском языке)',
    'Micro SD карточка (8Гб)',
    'Переходник Micro SD на USB',
  ]
}

const Item = () => {
  const url = new URL(window.location.href);
  const id = url.searchParams.get('id');

  const tabs = [
    {
      label: 'Описание',
      content: data.text
    },
    {
      label: 'Особенности',
      content: data.features.map(item => <li>{item}</li>)
    },
    {
      label: 'Характеристики',
      content: data.characteristics.map(item => <li>{item}</li>)
    },
    {
      label: 'Комплектация',
      content: data.equipment.map(item => <li>{item}</li>)
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
              items={data.images}
            />
          </div>
          <div className={styles.interactive}>
            <div className={styles.name}>
              {data.name}
            </div>
            <div className={styles.price}>
              {data.price} руб.
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

export default Item
