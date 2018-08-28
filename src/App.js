import React, { Component } from 'react';

import {Switch, Route, Link, Redirect} from 'react-router-dom'

import RegisterWhoContainer from './components/RegisterWhoContainer'; 
import RegisterLocal from './components/RegisterLocalContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Redirect from="/" to="/who" />
        <Route path="/who" component={RegisterWhoContainer} />

        <Route path="/chooseLocation" component={RegisterLocal} />
      </div>
    );
  }
}

export default App;
