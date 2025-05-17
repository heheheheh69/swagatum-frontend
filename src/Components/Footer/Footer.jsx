import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-section logo">
          <h2>YourLogo</h2>
          <p className='footertext'>At Swagatum, we believe that a beautiful space starts from the ground up. Our mission is to bring warmth, style, and comfort into your home through thoughtfully crafted carpets. Whether you're designing a modern living space or adding a cozy touch to a traditional room, our diverse range of carpets is designed to complement every lifestyle.</p>
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

        <div className="footer-section">
          <h2 className='FooterHeading'>Contact Us</h2>
          <a>Email: support@example.com</a>
          <a>Phone: +1 234 567 890</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
