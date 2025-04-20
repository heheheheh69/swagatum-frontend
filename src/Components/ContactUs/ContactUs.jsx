import React from 'react'
import "./Contactus.css"
const ContactUs = () => {
  return (
    <>
      <div className="contactus main">
        <div className="container">
            <div className="contact-all">

            <div className="contact-content">
                <p>Join Us & Grow Your Buisness</p>
                <span>Lets Explore Opportunities, Tailor Statergies, And Chart A Course To Financial Success Together</span>
            </div>
            <button className='main-btn white'>Contact us</button>
            </div>
        </div>
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.400402283311!2d78.039567274232!3d27.17514954876542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747121d702ff6d%3A0xdd2ae4803f767dde!2sTaj%20Mahal!5e0!3m2!1sen!2sin!4v1745092589896!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </>
  )
}

export default ContactUs
