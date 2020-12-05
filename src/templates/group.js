import React from "react"

import Layout from "src/components/layout"
import SEO from "src/components/seo"
import ItemsList from 'src/components/common/itemsList'
import groupLabels from 'src/constants/groupLabels'

const Group = ({ data }) => {
  const group = data.group.edges[0].node
  return (
    <Layout> 
      <SEO title="Group" />
      <ItemsList collection={group.value} title={groupLabels[group.name]} items={data.items.edges} />
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
