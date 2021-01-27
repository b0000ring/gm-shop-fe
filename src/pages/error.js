import React from "react"
import { Link } from 'gatsby'

import Layout from "src/components/layout"
import SEO from "src/components/seo"

const Error = () => {
  return (
    <Layout> 
      <SEO title="Ошибка" />
      <h1>
        Ошибка
      </h1>
      <h2>
        Что то пошло не так и мы уже работаем над этим
      </h2>
      <Link href={'/'}>
        <h3>
          Вернуться на главную
        </h3>
      </Link>
    </Layout>
  )
}

export default Error
