import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="logo">Math Magicians</h1>
    <ul className="nav-menu">
      <li className="nav-link">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-link">
        <Link to="/calculator">Calculator</Link>
      </li>
      <li className="nav-link">
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
