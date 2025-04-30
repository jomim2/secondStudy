import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.scss';

const Navbar = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='navbar'>
      <div className='logo'>
        <Link to='/'>MY5</Link>
      </div>
      <nav className='nav'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='guestbook'>Guestbook</Link></li>
        </ul>
      </nav>
      <div className='menuBtn' onClick={toggleMenu}>
        &#9776;
      </div>
      {
        isMenuOpen && (
          <div className='moblieMenu'>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='guestbook'>Guestbook</Link></li>
            </ul>
          </div>
        ) 
      }
    </header>
  )
}

export default Navbar