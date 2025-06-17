import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        
         <div className="footer-section">
          <h2>Address</h2>
          <p>Khasra No. 84, New Industrial Area, <br /> Village Thedi Baba Sawan Singh , <br /> Sirsa-125055(Haryana). </p>
           <Link to="https://maps.app.goo.gl/sgvsjKBvktss9yBMA"><button className='map-btn'>view on map </button></Link>
        </div>
         <div className="footer-section">
          <h2>Contact Us</h2>
          <p> <a href="tel:+919050370362">+91  9050370362</a> </p>
          <p> <a href="tel:+918448441376">+91  8448441376</a> </p>
        </div>
         <div className="footer-section">
          <h2>Contact Email's</h2>
          <p> <a href="mailto:sales@swagatamcarpet.com">Email: sales@swagatamcarpet.com</a> </p>
          <p> <a href="mailto:info@swagatamcarpet.com"> Email: info@swagatamcarpet.com </a></p>
        <p><a href="mailto:account@swagatamcarpet.com">Email: account@swagatamcarpet.com</a></p> 
        
        </div>
        <div className="footer-section footer-links">
          <h2 >Quick Links</h2>
          <div className="quick-link-row">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <p className='company'>Developed by - <a href="#" style={{ textDecoration: 'underline' , color:'#9b9191' }}>Technoginies</a></p>
      </div>
    </footer>
  );
};

export default Footer;
