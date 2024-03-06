import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom'

import './NavBar.css'

import { RiStarSmileLine } from "react-icons/ri";
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

function Navbar() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="nav-wrapper">
          <nav className='navbar'>
              <Link to='/' className='navbar-logo' onClick={closeMobileMenu} >
                <RiStarSmileLine className='navbar-icon'/> Rising Stars
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
                  <NavLink to='/admissions' className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')} onClick={closeMobileMenu}>
                    Admissions
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to='/parents' className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')} onClick={closeMobileMenu}>
                    Parents
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to='/our-team' className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')} onClick={closeMobileMenu}>
                    Our Team
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/contact-us' className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')} onClick={closeMobileMenu}>
                    Contact Us
                  </NavLink>
                </li>
              </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;