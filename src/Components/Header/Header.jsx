import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">Logo</div>
        <ul className='nav-elements'>
            <li><a href="#">Demo</a></li>
            <li><a href="#">Demo</a></li>
            <li><a href="#">Demo</a></li>
            <li><a href="#">Demo</a></li>
        </ul>
        <div className="companies">button</div>
      </header>
    </>
  )
}

export default Header
