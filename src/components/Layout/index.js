import React from 'react'
import { ToastContainer } from 'react-toastify';

import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import indexStyles from './index.module.css'
import 'react-toastify/dist/ReactToastify.css';

function Layout({ children }) {
  return (
    <div className={indexStyles.layout}>
      <Header/>
      <Main>
        {children}
      </Main>
      <Footer/>
      <ToastContainer hideProgressBar />
    </div>
  )
}

export default Layout