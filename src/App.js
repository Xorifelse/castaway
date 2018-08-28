import React, { Component } from 'react';

import {Switch, Route, Link, Redirect} from 'react-router-dom'

import RegisterWhoContainer from './components/RegisterWhoContainer'; 
import RegisterLocal from './components/RegisterLocalContainer';
import RegisterDatePickerContainer from './components/RegisterDatePickerContainer';

// <Redirect from="/" to="/who" />

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Route path="/who" component={RegisterWhoContainer} />

        <Route path="/chooseLocation" component={RegisterLocal} />
        <Route path="/when" component={RegisterDatePickerContainer} />
      </div>
    );
  }
}

export default App;
