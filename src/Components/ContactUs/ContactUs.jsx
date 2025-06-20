import React from 'react'
import "./Contactus.css"
import { Link } from 'react-router-dom';
import Map from '../Map/Map'
const ContactUs = () => {
  return (
    <>
    <section>

      <div className="contactus main">
        <div className="container">
            <div className="contact-all"> 

            <div className="contact-content">
                <h2 style={{color:"#fff"}}>Let's Connect</h2>
                <h3>We're here for you</h3>
            </div>
            <button className='main-btn white'><Link to="/contact">Contact Us</Link></button>
            </div>
        </div>
      </div>
    </section>
        
    </>
  )
}

export default ContactUs
