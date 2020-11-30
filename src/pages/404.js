import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404 :(</h1>
    <h2>Страница не существует или была удалена</h2>
    <Link href={`/`}>
      <h3>
        Вернуться на главную
      </h3>
    </Link>
  </Layout>
)

export default NotFoundPage
