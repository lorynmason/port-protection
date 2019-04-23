import React from 'react';
import apartment1 from '../styles/images/Apartment-outside.jpg'
import apartment2 from '../styles/images/Apartment-inside-1.jpg'
import apartment3 from '../styles/images/Apartment-inside-2.jpg'


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
        <img src={apartment1} alt="Outside of the apartment"/>
        <img src={apartment2} alt="Inside of the apartment"/>
        <img src={apartment3} alt="Inside of the apartment"/>
      </div>
      <p>2 queen beds, 4 full beds, living room, full kitchen, washer and dryer, and bathroom – $575 per night</p>
      <h3>To book lodging contact us <a href="https://portprotectionlodge.typeform.com/to/EgWbs7">here</a></h3>
    </section>
  )
}