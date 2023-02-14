import React from 'react';
import Logo from '../images/Logo.svg';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
      <header>
        <nav className="container">
          <Link to="/"><img src={Logo} alt="Little Lemon logo"/></Link>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link to="/order">Order-Online</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
  );
};

export default Header;
