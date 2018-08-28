import React, { Component } from 'react';

import {Switch, Route, Link, Redirect} from 'react-router-dom'

import RegisterWhoContainer from './components/RegisterWhoContainer'; 
import RegisterLocal from './components/RegisterLocalContainer';

import RegisterDatePickerContainer from './components/RegisterDatePickerContainer';

import SearchMatchesContainer from './components/SearchMatchesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (<Redirect to="/who" />)} />
        <Route exact path="/who" component={RegisterWhoContainer} />
        <Route exact path="/chooseLocation" component={RegisterLocal} />
        <Route exact path="/when" component={RegisterDatePickerContainer} />
        <Route exact path="/seachMatches" component={SearchMatchesContainer} />
      </div>
    );
  }
}

export default App;
