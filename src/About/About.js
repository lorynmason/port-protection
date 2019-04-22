import React from 'react';
import { Link } from 'react-router-dom';
import jack from '../styles/images/jack-mason.jpeg';
import family from '../styles/images/family-pp.jpeg';

export const About = () => {
  return (
    <section id="other">
      <h1>About Us</h1>
      <p>In 1985 Jack M Mason started to build his final home in the remote community of Port Protection, Alaska. This was his adventure, and the location of the beloved Discovery Channel show Port Protection. His legacy lives on in his children and his grandchildren.</p>
      <img className="about-img" src={jack} alt="Jack Mason"/>
      <img className="about-img" src={family} alt="Some of Jack Mason’s children, grandchildren, and great grandchildren."/>
      <h3>Got questions? Contact us <Link to="/contact">here</Link></h3>
    </section>
  )
}