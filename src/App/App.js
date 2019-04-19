import React, { Component } from 'react';
import '../styles/main.scss';
import { Nav } from "../Nav/Nav";
import { Home } from "../Home/Home"
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        <video id="background-video"  loop autoPlay muted>
          <source src="https://videos.files.wordpress.com/J5vpit3s/video-feb-24-10-49-36-am_hd.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default App;
