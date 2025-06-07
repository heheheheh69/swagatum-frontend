import React, { useState } from 'react';
import "./Header.css";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png"
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container innnerHeader">
        <div className="logo">
          <Link to={'/'}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <button className="menuBtn" onClick={toggleMenu}>
          <IoIosMenu />
        </button>

        <nav className={menuOpen ? "open" : ""}>
          <button className="closemenu" onClick={closeMenu}>
            <IoClose />
          </button>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/products" onClick={closeMenu}>Products</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About Us</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact Us</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
