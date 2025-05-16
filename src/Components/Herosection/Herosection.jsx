import React from 'react'
import "./Herosection.css"
const Herosection = () => {
  return (
    <>
    <div className="herosection">
        <div className="container">
          <h1>Beautiful Carpets <br /> for Every Space</h1>
          <p>Explore styles, colors, and textures that bring life to <br />your floors.</p>
          <div className="btn-area">
            <button className='main-btn white' ><a href="/contact">Contant Us</a></button>
            <button className='main-btn light'><a href="/products">Our Products</a></button>
          </div>
        </div>
    </div> 
    </>
  )
}

export default Herosection
