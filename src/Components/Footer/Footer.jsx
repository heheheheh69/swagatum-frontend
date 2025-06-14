import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-section logo">
          <h4>Address</h4>
          <p>Khasra No. 84, New Industrial Area, <br /> Village Thedi Baba Sawan Singh , <br /> Sirsa-125055(Haryana). </p>
          <button className='map-btn'><Link to="https://maps.app.goo.gl/sgvsjKBvktss9yBMA">view on map</Link></button>
        </div>
         <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Phone: +91  9050370362  </p>
          <p>Phone: +91 8448441376</p>
        </div>
         <div className="footer-section">
          <h2>Contact Email's</h2>
          <p>Email: sales@mcclnonwovenind.com <br />
              Email: info@mcclnonwovenind.com <br />
            Email: account@mcclnonwovenind.com
</p>
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
        <p className='company'>Developed by - <a href="#" style={{ textDecoration: 'underline' , color:'#656565' }}>Technoginies</a></p>
      </div>
    </footer>
  );
};

export default Footer;
