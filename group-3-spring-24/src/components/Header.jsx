
import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <a href src="/">
          <img src="/path/to/logo.png" alt="Logo" />  {/*add proper logo path*/}
        </a>
      </div>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-list-item">
            <a href src="/">Home</a> {/*might want to delete this option if clicking logo takes you to home */}
          </li>
          <li className="nav-list-item">
            <a href src="/about">About</a>
          </li>
          <li className="nav-list-item">
            <a href="/contact">Contact</a>
          </li>
          
        </ul>
      </nav>
      <div className="header__actions"> {/* put login/sign up here */}
        
      </div>
    </header>
  );
};

export default Header;
