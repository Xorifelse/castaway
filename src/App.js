import React, { Component } from 'react';

import {Switch, Route, Link} from 'react-router-dom'

import RegisterWhoContainer from './components/RegisterWhoContainer'; 
import RegisterLocal from './components/RegisterLocal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RegisterWhoContainer />
        <br />
        <RegisterLocal />
      </div>
    );
  }
}

export default App;
