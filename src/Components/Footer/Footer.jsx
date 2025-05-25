import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-section logo">
          <h4>Address</h4>
          <p>A-752, shop area near  Taj mahal and laal qila . </p>
          <button className='map-btn'><Link to="/">view on map</Link></button>
        </div>
         <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Phone: +1 234 567 890</p>
          <p>Phone: +1 234 567 890</p>
        </div>
         <div className="footer-section">
          <h2>Contact Email</h2>
          <p>Email: support@example.com</p>
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
