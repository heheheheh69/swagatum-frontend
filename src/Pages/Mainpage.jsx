import React from 'react'
import Herosection from '../Components/Herosection/Herosection'
import Aboutus from '../Components/AboutUS/Aboutus'
import Products from '../Components/Products/Products'
import ContactUs from '../Components/ContactUs/ContactUs'
import Footer from '../Components/Footer/Footer'
import Map from '../Components/Map/Map'

const Mainpage = () => {
  return (
    <>
      <Herosection />
      <Aboutus />
      <Products />
      <ContactUs />
      <Map/>
    </>
  )
}

export default Mainpage
