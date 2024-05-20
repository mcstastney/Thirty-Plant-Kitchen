// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src="/path/to/logo.png" alt="Logo" />
        </Link>
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
      <div className="header__actions">
        {/* Optional: Search bar, user profile icon, etc. */}
        <input type="text" placeholder="Search..." className="header__search" />
        <Link to="/profile" className="header__profile">
          <img src="/path/to/profile-icon.png" alt="Profile" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
