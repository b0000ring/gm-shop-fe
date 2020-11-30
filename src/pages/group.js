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

const Group = () => {
  const url = new URL(window.location.href);
  const type = url.searchParams.get("type");
  return (
    <Layout> 
      <SEO title="Group" />
      <ItemsList title={groupLabels[type]} items={handled} />
    </Layout>
  )
}

export default Group
