import React from 'react'
import { Link } from 'gatsby'
import Layout from "src/components/layout"
import SEO from "src/components/seo"
import ItemsList from 'src/components/common/itemsList'
import groupLabels from 'src/constants/groupLabels'

import styles from './group.module.css'

const Group = ({ data }) => {
  const group = data.group.edges[0].node
  return (
    <Layout> 
      <SEO title="Group" />
      <div className="content">
        <div className={styles.header}>
          <h1>{groupLabels[group.name]}</h1>
          <Link href="/catalog">Вернуться в каталог</Link>
        </div>
        <ItemsList collection={group.value} items={data.items.edges} />
        <div className={styles.bottom}>
          <Link href="/catalog">ПОСМОТРЕТЬ ДРУГИЕ КАТЕГОРИИ</Link>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($name: String!) {
    items: allDataJson(filter: {type: {eq: "item"}}) {
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
          newPrice
          text
        }
      }
    }
    group: allDataJson(filter: {type: {eq: "collection"}, name: {eq: $name}}) {
      edges {
        node {
          id
          name
          value
        }
      }
    }
  }
`

export default Group
