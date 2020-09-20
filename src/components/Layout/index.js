import React from 'react'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import indexStyles from './index.module.css'

function Layout({ children }) {
  return (
    <div className={indexStyles.layout}>
      <Header/>
      <Main>
        {children}
      </Main>
      <Footer/>
    </div>
  )
}

export default Layout