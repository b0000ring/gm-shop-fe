import React from "react"
import { Link } from "gatsby"

import Layout from "src/components/layout"
import SEO from "src/components/seo"
import clsx from 'clsx'

import styles from "./about.module.css"
import Social from '../components/common/social'

const About = () => (
  <Layout> 
    <SEO title="О нас" />
    <div className={clsx('content', styles.about)}>
      <h1>О нас</h1>
      <h3>CYBERGEEK</h3>
      <p>
        CYBERGEEK - интернет-магазин портативной цифровой электроники и аксессуаров.<br />
        Мы создали CYBERGEEK, чтобы сделать мир интересных гаджетов и цифровых развлечений ближе для Вас.<br />
        <br />
        Мы увлечены тем, что мы делаем и среди множества товаров отбираем только то, что считаем лучшим, основываясь на балансе цены и качества.<br /><br /> 

        Узнать подробности или задать интересующие вопросы, Вы можете <Link to="/contacts">по телефону или написав нам на почту.</Link> <br />
        <br />
        Будьте в курсе всех наших событий и подписывайтесь на наш магазин в социальных сетях. <br />
      </p>
      <div>
        <Social />
      </div>
      <p>
        <h3>Юридическая информация</h3>
        <ul>
          <li>
            И.П. Чиркин Александр Олегович
          </li>
          <li>
            ИНН: 1 0 1 4 0 2 4 5 1 6 6 4
          </li>
          <li>
            ОГРНИП: 3 2 0 1 0 0 1 0 0 0 2 1 7 3 8
          </li>
        </ul>
      </p>
    </div>
  </Layout>
)

export default About
