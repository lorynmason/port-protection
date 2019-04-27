import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import lodgeLogo from "../styles/images/image.png";

export const Nav = () => {
  return (
    <nav>
      <Link to="/"><img src={lodgeLogo} alt="Port Protection Lodge Logo" id="small-logo"/></Link>
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
      <a href="https://portprotectionlodge.typeform.com/to/EgWbs7" target="_blank">
        <button className="nav-button">Contact Us</button>
      </a>
    </nav>
  )
}
