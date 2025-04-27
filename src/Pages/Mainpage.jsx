import React from 'react'
import Herosection from '../Components/Herosection/Herosection'
import Aboutus from '../Components/AboutUS/Aboutus'
import Products from '../Components/Products/Products'
import ContactUs from '../Components/ContactUs/ContactUs'
import Map from '../Components/Map/Map'
import WhyUs from '../Components/WhyUs/WhyUs'

const Mainpage = () => {
  return (
    <>
      <Herosection />
      <Aboutus />
      <Products />
      <WhyUs/>
      <ContactUs />
      <Map/>
    </>
  )
}

export default Mainpage
