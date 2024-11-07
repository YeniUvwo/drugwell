// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from './Images/images.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Navbar({ toggleCart }) {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <div className="navbar-logo-container">
          <img src={logo} className="navbar-logo" alt="Drugwell Pharmacy Logo" />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            {['Home', 'About', 'Contact', 'Shop'].map((item) => (
              <li className="nav-item" key={item}>
                <Link className="nav-link" to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="ms-auto">
          <FontAwesomeIcon 
            icon={faCartShopping} 
            className="cart-icon" 
            onClick={toggleCart} 
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
