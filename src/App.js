import React, { Component } from 'react';

import {Switch, Route, Link} from 'react-router-dom'

import RegisterWhoContainer from './components/RegisterWhoContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RegisterWhoContainer />
      </div>
    );
  }
}

export default App;
