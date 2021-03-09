import React from 'react'
import { Link } from 'gatsby'

import Layout from "src/components/layout"
import SEO from "src/components/seo"
import ItemsList from 'src/components/common/itemsList'
import groupLabels from 'src/constants/groupLabels'
import Button from 'src/components/buttons/Button'

import styles from './group.module.css'

const Group = ({ data }) => {
  const group = data.group.edges[0].node
  return (
    <Layout> 
      <SEO title={groupLabels[group.name]} />
      <div className="content">
        <div className={styles.header}>
          <h1>{groupLabels[group.name]}</h1>
          <Link to="/catalog">
            <Button>Вернуться в каталог</Button>
          </Link>
        </div>
        <ItemsList collection={group.value} items={data.items.edges} />
        <div className={styles.bottom}>
          <Link to="/catalog">
            <Button reverse>ПОСМОТРЕТЬ ДРУГИЕ КАТЕГОРИИ</Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($name: String!) {
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
          code
          features
          name
          price
          out
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
