import React, { useState, useEffect } from 'react';
import './Header.css';
import SocialLinks from './SocialLinks';
import logo from '../assets/logo.png'; 

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <a href="/">
            <img src={logo} alt="Trip Impression Logo" className="logo" />
          </a>
        </div>

        <button className="mobile-nav-toggle" onClick={toggleNav} aria-expanded={isNavOpen}>
          <span className="sr-only">Menu</span>
          <div className={`hamburger ${isNavOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <nav className={`main-nav ${isNavOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/packages">Packages</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        <div className="header-social">
          <SocialLinks />
        </div>
      </div>
    </header>
  );
};

export default Header;