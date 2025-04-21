import React from 'react'
import "./Herosection.css"
const Herosection = () => {
  return (
    <>
    <div className="herosection">
        <div className="container">
          <span>"Where Comfort Meets Craftsmanship."</span>
          <h1>Swagatam</h1>
          <p>"High-Quality Carpets Without the High Price."</p>
          <div className="btn-area">
            <button className='main-btn white' ><a href="/contact" target='_blank'>Contant Us</a></button>
            <button className='main-btn light'><a href="#" target='_blank'>Our Products</a></button>
          </div>
        </div>
    </div> 
    </>
  )
}

export default Herosection
