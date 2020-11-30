import React from "react"

import Layout from "src/components/layout"
import SEO from "src/components/seo"
import ItemsList from 'src/components/common/itemsList'
import groupLabels from 'src/constants/groupLabels'

const handled = [
  {
    image: '/test.PNG',
    name: 'BittBoy',
    price: '1000'
  },
  {
    image: '/test.PNG',
    name: 'BittBoy',
    price: '1000'
  },
  {
    image: '/test.PNG',
    name: 'BittBoy',
    price: '1000'
  },
]

const groups = [
  {
    type: 'handled'
  },
  {
    type: 'controllers'
  }
]

const Catalog = () => (
  <Layout> 
    <SEO title="Catalog" />
    {groups.map(item => (
      <ItemsList title={groupLabels[item.type]} items={handled} link={`/group?type=${item.type}`} />
    ))}
  </Layout>
)

export default Catalog
