import React from 'react'
import Header from '../../Components/Header/Header'
import Herosection from '../../Components/Herosection/Herosection'
import Aboutus from '../../Components/AboutUS/Aboutus'
import Products from '../../Components/Products/Products'
import ContactUs from '../../Components/ContactUs/ContactUs'
import Footer from '../../Components/Footer/Footer'

const Mainpage = () => {
  return (
    <>
    <Header/>
      <Herosection/>
      <Aboutus/>
      <Products/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default Mainpage
