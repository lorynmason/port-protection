import React from 'react';
import { Link } from 'react-router-dom';

export const Lodge = () => {
  return (
    <section>
      <h1>Lodging</h1>
      <h2>Come stay in our little hideaway</h2>
      <h3>Cabin</h3>
      <p>1 queen bed with cook stove and oven – $175 per night</p>
      <h3>Downstairs Room</h3>
      <p>2 queen beds, private shower, microwave, toaster, coffee pot, and fridge – $175 per night</p>
      <h3>Apartment</h3>
      <div>
        <img/>
        <img/>
        <img/>
      </div>
      <p>2 queen beds, 4 full beds, living room, full kitchen, washer and dryer, and bathroom – $575 per night</p>
      <h3>To book lodging contact us <Link to="/contact">here</Link></h3>
    </section>
  )
}