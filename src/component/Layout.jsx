import React from 'react'
import { Header } from './Header'
import { Faq } from './Faq'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'
import { Home } from './Home'
import Shop from './Shop'

const Layout = () => {
  return (
    <>
    <Header/>
   
    <Outlet/> 
    <Shop/>   
    <Faq/>
    <Footer/>


    </>
  )
}

export default Layout