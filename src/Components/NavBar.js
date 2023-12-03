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
              <FaChild className='navbar-icon'/> rising stars
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <NavLink to='/' className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')} onClick={closeMobileMenu}>
                  home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/visit-us' className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')} onClick={closeMobileMenu}>
                  visit us
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/contact' className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')} onClick={closeMobileMenu}>
                  contact
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/about' className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')} onClick={closeMobileMenu}>
                  about
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