import React, { Component } from 'react';
import './styles/main.scss';
import lodgeLogo from "./styles/images/image.png"

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={lodgeLogo} alt="Port Protection Lodge Logo" id="lodge-logo"/>
        <video id="background-video"  loop autoPlay muted>
          <source src="https://videos.files.wordpress.com/J5vpit3s/video-feb-24-10-49-36-am_hd.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default App;
