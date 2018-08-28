import React, { Component } from 'react';

import {Switch, Route, Link} from 'react-router-dom'

import RegisterWhoContainer from './components/RegisterWhoContainer'; 
import RegisterLocal from './components/RegisterLocalContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RegisterWhoContainer />
        <br />
        
        <RegisterLocal /> {/* FIX ME: use routing */}
        {/* <Route path="/chooseLocation" component={RegisterLocal} /> */}
      </div>
    );
  }
}

export default App;
