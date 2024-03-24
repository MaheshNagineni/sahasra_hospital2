import React, { useState } from 'react';
import './index.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div>
          <a href="/">
            <img src="https://res.cloudinary.com/dppobh7kx/image/upload/v1710936645/jpl8eghynwlxzehcr8n6.png" alt="logo" className='logo' />
          </a>
        </div>
        <button className="navbar-toggler" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/hospital-doctors">Hospital & Doctors</a></li>
          <li><a href="/book-appointment">Book Appointment</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/about-contact">About & Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
