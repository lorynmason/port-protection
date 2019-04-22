import React from 'react';
import { Link } from 'react-router-dom';

export const Skiff = () => {
  return (
    <section>
      <h1>Skiff Rentals</h1>
      <p>3 Lund skiffs, 16 feet, powered by 25 hp Yamaha outboard – $75 per day each</p>
      <h3>To rent a skiff contact us <Link to="/contact">here</Link></h3>
    </section>
  )
}