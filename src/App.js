import React, { Component } from 'react';

import {Switch, Route, Link, Redirect} from 'react-router-dom'

import RegisterWhoContainer from './components/RegisterWhoContainer'; 
import RegisterLocal from './components/RegisterLocalContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (<Redirect to="/who" />)} />
        <Route exact path="/who" component={RegisterWhoContainer} />

        <Route exact path="/chooseLocation" component={RegisterLocal} />
      </div>
    );
  }
}

export default App;
