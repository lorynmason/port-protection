import React from 'react';
import { NavLink } from 'react-router-dom';
import lodgeLogo from "../styles/images/image.png";

export const Nav = () => {
  return (
    <nav>
      <img src={lodgeLogo} alt="Port Protection Lodge Logo" id="small-logo"/>
      <NavLink to="/lodging">
        <button className="nav-button">Lodging</button>
      </NavLink>
      <NavLink to="/skiff-rentals">
        <button className="nav-button">Skiff Rentals</button>
      </NavLink>
      <NavLink to="/other-services">
        <button className="nav-button">Other Services</button>
      </NavLink> 
      <NavLink to="/about">
        <button className="nav-button">About</button>
      </NavLink>
      <a href="https://portprotectionlodge.typeform.com/to/EgWbs7">
        <button className="nav-button">Contact Us</button>
      </a>
    </nav>
  )
}
