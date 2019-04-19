import React from 'react';
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav>
      <NavLink to="/lodging">
        <button className="nav-button">Lodging</button>
      </NavLink>
      <NavLink to="/skiff-rentals">
        <button className="nav-button">Skiff Rentals</button>
      </NavLink>
      <NavLink to="/other-services">
        <button className="nav-button">Other Services</button>
      </NavLink>
      <NavLink to="/contact">
        <button className="nav-button">Contact Us</button>
      </NavLink>
      <NavLink to="/about">
        <button className="nav-button">About</button>
      </NavLink>
    </nav>
  )
}
