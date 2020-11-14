import React from "react"

import Layout from "src/components/Layout"
import SEO from "src/components/seo"
import ItemsList from 'src/components/common/itemsList'
import Banner from 'src/components/common/banner'

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

const IndexPage = () => (
  <Layout> 
    <SEO title="Home" />
    <Banner />
    <ItemsList title="НОВЫЕ ПОСТУПЛЕНИЯ" items={handled} />
  </Layout>
)

export default IndexPage
