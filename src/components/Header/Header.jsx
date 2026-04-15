// src/components/Header/Header.jsx

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ loggedIn, email, onSignOut }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className='header'>
      <h1 className={`header__title ${loggedIn && menuOpen ? 'header__title_hidden' : ''}`}>
        Around<span className='header__subtitle'>The U.S.</span>
      </h1>
      {loggedIn ? (
        <>
          <div className='header__mobile-menu'>
            <button className='header__hamburger' onClick={toggleMenu}>
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
          <nav className={`header__nav ${menuOpen ? 'header__nav_open' : ''}`}>
            <p className='header__email'>{email}</p>
            <button className='header__button' onClick={onSignOut}>
              Cerrar sesión
            </button>
          </nav>
        </>
      ) : (
        <nav className='header__nav'>
          <Link
            className='header__link'
            to={location.pathname === '/signin' ? '/signup' : '/signin'}
          >
            {location.pathname === '/signin' ? 'Regístrate' : 'Iniciar sesión'}
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;