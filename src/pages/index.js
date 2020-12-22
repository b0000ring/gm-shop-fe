import React from "react"
import { graphql } from "gatsby"

import Layout from "src/components/layout"
import SEO from "src/components/seo"
import ItemsList from 'src/components/common/itemsList'
import Banner from 'src/components/common/banner'

const IndexPage = ({ data }) => { 
  const collection = data.collection.edges[0].node.value
  const items = data.items.edges
  return (
    <Layout> 
      <SEO title="Home" />
      <Banner />
      <ItemsList collection={collection} items={items} title="НОВЫЕ ПОСТУПЛЕНИЯ" />
    </Layout>
  )
}

export const query = graphql`
  query {
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
          text
        }
      }
    }
    collection: allDataJson(filter: {type: {eq: "collection"}, name: {eq: "new"}}) {
      edges {
        node {
          id
          value
        }
      }
    }
  }
`

export default IndexPage
