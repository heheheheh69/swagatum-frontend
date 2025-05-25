import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-section logo">
          <h2>Address</h2>
          <p>Taj mahal k niche qutub minar k piche.</p>
          <button className='map-btn'><Link to="/">view on map</Link></button>
        </div>
         <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Phone: +1 234 567 890</p>
          <p>Phone: +1 234 567 890</p>
        </div>
         <div className="footer-section">
          <h4>Contact Email</h4>
          <p>Email: support@example.com</p>
        </div>
        <div className="footer-section footer-links">
          <h2 className='FooterHeading'>Quick Links</h2>
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
      </div>
    </footer>
  );
};

export default Footer;
