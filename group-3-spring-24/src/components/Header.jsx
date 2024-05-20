
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img src="/path/to/logo.png" alt="Logo" /> // add proper logo path
        </Link>
      </div>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Home</Link> // might want to delete this option if clicking logo takes you to home
          </li>
          <li className="nav-list-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/contact">Contact</Link>
          </li>
          
        </ul>
      </nav>
      <div className="header__actions"> // put login/sign up here
        
      </div>
    </header>
  );
};

export default Header;
