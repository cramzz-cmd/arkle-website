import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/arkle-logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-wrapper">
          <NavLink to="/" className="logo" onClick={closeMenu}>
            <img src={logo} alt="Arkle Energy logo" className="logo-image" />
          </NavLink>
          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <li>
              <NavLink to="/" className="nav-link" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link" onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/mission" className="nav-link" onClick={closeMenu}>
                Mission
              </NavLink>
            </li>
            <li>
              <NavLink to="/technology" className="nav-link" onClick={closeMenu}>
                Technology
              </NavLink>
            </li>
            <li>
              <NavLink to="/applications" className="nav-link" onClick={closeMenu}>
                Applications
              </NavLink>
            </li>
            <li>
              <NavLink to="/locations" className="nav-link" onClick={closeMenu}>
                Locations
              </NavLink>
            </li>
            <li>
              <NavLink to="/team" className="nav-link" onClick={closeMenu}>
                Team
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link contact-btn" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav-controls">
            <ThemeToggle />
            <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu} role="button" tabIndex={0} aria-label="Toggle navigation" onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleMenu();
              }
            }}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
