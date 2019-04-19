import React from 'react';
import lodgeLogo from "../styles/images/image.png";

export const Home = () => {
  return (
    <div id="lodge-logo">
      <img src={lodgeLogo} alt="Port Protection Lodge Logo"/>
      <h1>A True Alaskan Adventure</h1>
    </div>
  )
}