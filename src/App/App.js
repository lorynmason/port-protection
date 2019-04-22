import React, { Component } from 'react';
import '../styles/main.scss';
import { Nav } from "../Nav/Nav";
import { Home } from "../Home/Home"
import { Pages } from "../Pages/pages"
import { Route, Switch } from 'react-router-dom'
import boatgif from "../styles/images/PortProtectionBoat.gif";

class App extends Component {
  render() {
    var back = {
      background: `url(${boatgif})`,
      'background-repeat': 'no-repeat',
      'background-size': 'cover'
    }
    return (
      <div style={ back } className="App" >
        <Nav />
        <Switch> */}
        <Route exact path="/" component={Home}/>
        <Route path="/lodging" component={Pages}/>
        </Switch> 
      </div>
    );
  }
}

export default App;
