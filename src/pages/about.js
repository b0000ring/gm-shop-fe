import React from "react"
import { Link } from "gatsby"

import Layout from "src/components/layout"
import SEO from "src/components/seo"
import clsx from 'clsx'

import styles from "./about.module.css"
import Social from '../components/common/social'

const About = () => (
  <Layout> 
    <SEO title="About" />
    <div className={clsx('content', styles.about)}>
      <h1>О нас</h1>
      <h3>MINIBIT</h3>
      <p>
        MINIBIT - интернет-магазин портативной цифровой электроники и аксессуаров.<br />
        Мы создали MINIBIT, чтобы сделать мир интересных гаджетов и цифровых развлечений ближе для Вас.<br />
        <br />
        Мы увлечены тем, что мы делаем и среди множества товаров отбираем только то, что считаем лучшим, основываясь на балансе цены и качества.<br /><br /> 

        Узнать подробности или задать интересующие вопросы, Вы можете <Link href="/contacts">по телефону или написав нам на почту.</Link> <br />
        <br />
        Будьте в курсе всех наших событий и подписывайтесь на наш магазин в социальных сетях. <br />
      </p>
      <div>
        <Social />
      </div>
    </div>
  </Layout>
)

export default About
