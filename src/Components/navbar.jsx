import React, { useEffect, useRef, useState } from 'react'
import './navbar.css'
import { NavLink, useLocation } from 'react-router-dom'
import { HiBars2 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { RiStarSmileLine } from "react-icons/ri";


export default function Navbar() {

  const menuRef = useRef(null); // Ref for detecting outside click
  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive(!active)
    console.log('that tickled')
  }

  // Close when clicking outside navbar 
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActive(false);
      }
    };

    if (active) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [active]);

  const getRouteTitle = (pathname) => {
    if (pathname === '/') return 'Rising Stars';
    if (pathname.startsWith('/admissions')) return 'Admissions';
    if (pathname.startsWith('/contact-us')) return 'Contact';
    if (pathname.startsWith('/book-a-tour')) return 'Book A Tour';
    if (pathname.startsWith('/hourly')) return 'Hourly';
    if (pathname.startsWith('/parents')) return 'FAQ'
    if (pathname.startsWith('/our-team')) return 'Our Team'
    return 'Rising Stars'; // fallback
  };

  const location = useLocation(); 
  const pageTitle = getRouteTitle(location.pathname);


  return (
    <nav ref={menuRef} className='navbar'>
      <div className={active === false ? 'navbar-content' : 'navbar-content active'}>
        <div className='menu-items' style={{ width: '100%' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 2rem 0rem 2rem' }}>
            <div style={{display: 'flex', alignItems: 'center', color: 'white'}}>
              <RiStarSmileLine style={{fontSize: '2rem'}}/>
              <h2 className='nonselectable' style={{ cursor: 'default', color: 'white'}}>{pageTitle}</h2>
            </div>
            <div onClick={handleClick}>
              {active === false ? <HiBars2 className='nav-buttons' /> : <IoMdClose className='nav-buttons' />}
            </div>
          </div>
        </div>
        <div className='menu-selection'>
          <NavLink onClick={handleClick} className={active === false ? 'menu-links-closing' : 'menu-links nonselectable'} style={{ '--i': 1 }} to='/'>
            HOME
          </NavLink>
          <NavLink onClick={handleClick} className={active === false ? 'menu-links-closing' : 'menu-links nonselectable'} style={{ '--i': 2 }} to='/admissions'>
            ADMISSIONS
          </NavLink>
          <NavLink onClick={handleClick} className={active === false ? 'menu-links-closing' : 'menu-links nonselectable'} style={{ '--i': 3 }} to='/hourly'>
            HOURLY
          </NavLink>
          <NavLink onClick={handleClick} className={active === false ? 'menu-links-closing' : 'menu-links nonselectable'} style={{ '--i': 4 }} to='/book-a-tour'>
            VISIT US
          </NavLink>
          <NavLink onClick={handleClick} className={active === false ? 'menu-links-closing' : 'menu-links nonselectable'} style={{ '--i': 5 }} to='/parents'>
            PARENTS
          </NavLink>
          <NavLink onClick={handleClick} className={active === false ? 'menu-links-closing' : 'menu-links nonselectable'} style={{ '--i': 6 }} to='/our-team'>
            OUR TEAM
          </NavLink>
          <NavLink onClick={handleClick} className={active === false ? 'menu-links-closing' : 'menu-links nonselectable'} style={{ '--i': 7 }} to='/contact-us/'>
            CONTACT US
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
