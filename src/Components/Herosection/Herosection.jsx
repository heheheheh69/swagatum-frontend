import React from 'react'
import { Link } from 'react-router-dom';

import "./Herosection.css"
const Herosection = () => {
  return (
    <>
    <div className="herosection">
        <div className="container">
          <h1>“Your Floor. Our Legacy.”</h1>
          <p>“From Sirsa to across India — bringing you a range of high-quality non-woven carpets, mats, and artificial grass that stand the test of time.”</p>
          <div className="btn-area">
            <button className='main-btn white' ><Link to="/contact">Contact Us</Link></button>
            <button className='main-btn light'><Link to="/products"> Our Products</Link></button>
          </div>
        </div>
    </div> 
    </>
  )
}

export default Herosection
