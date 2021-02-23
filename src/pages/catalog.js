import React from "react"
import { graphql } from "gatsby"

import Layout from "src/components/layout"
import SEO from "src/components/seo"
import ItemsList from 'src/components/common/itemsList'
import groupLabels from 'src/constants/groupLabels'

import styles from './catalog.module.css'

const Catalog = ({ data }) => {
  const groups = data.categories.edges[0].node.categories
  return (
    <Layout> 
      <SEO title="Каталог" />
      <div className="content">
        <h1 className={styles.title}>Каталог</h1>
      </div>
        {groups.map(item => (
          <div className={styles.group}>
            <div className="content">
              <ItemsList title={groupLabels[item.name]} collection={item.items} items={data.items.edges} link={`/catalog/${item.name}`} />
            </div>
          </div>
        ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    items: allMongodbCybergeekItems {
      edges {
        node {
          characteristics
          equipment
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
          features
          name
          code
          price
          out
          newPrice
          text
        }
      }
    }
    categories: allDataJson(filter: {type: {eq: "categories"}, name: {eq: "categories"}}) {
      edges {
        node {
          id
          categories {
            items
            name
          }
        }
      }
    }
  }
`

export default Catalog
