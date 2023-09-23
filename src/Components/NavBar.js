import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom'

import './NavBar.css'

import { FaChild } from 'react-icons/fa'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

function Navbar() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu} >
              <FaChild className='navbar-icon'/>
              Rising Stars
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <NavLink to='/' className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')} onClick={closeMobileMenu}>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/visit-us' className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')} onClick={closeMobileMenu}>
                  Visit Us
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/contact' className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')} onClick={closeMobileMenu}>
                  Contact
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/about' className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')} onClick={closeMobileMenu}>
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;