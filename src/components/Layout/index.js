import React, { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import clsx from 'clsx'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import checkIsMobile from '../../utils/isMobile'
import indexStyles from './index.module.css'
import 'react-toastify/dist/ReactToastify.css'

function Layout({ children }) {
  const [showChild, setShowChild] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setShowChild(true)
    setIsMobile(checkIsMobile())
  }, [])

  if (!showChild) {
    return null
  }
  
  return (
    <div className={clsx(indexStyles.layout, isMobile && 'gl-mobile')}>
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