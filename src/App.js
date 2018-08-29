import React, { Component } from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom'

import RegisterWhoContainer from './components/RegisterWhoContainer'
import RegisterWhereContainer from './components/RegisterWhereContainer'
import RegisterWhenContainer from './components/RegisterWhenContainer'
import SearchMatchesContainer from './components/SearchMatchesContainer'
import PeopleFeedContainer from './components/PeopleFeedContainer'
import UserFilterContainer from './components/UserFilterContainer'
import UserProfileContainer from './components/UserProfileContainer'



// import RegisterLocal from './components/RegisterLocalContainer'
// import RegisterTravelerContainer from './components/RegisterTravelerContainer'

//  <Route exact path="/localLocation" component={RegisterLocal} />
//  <Route exact path="/travelerLocation" component={RegisterTravelerContainer} />

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/who" component={RegisterWhoContainer} />
          <Route exact path="/where" component={RegisterWhereContainer} />
          <Route exact path="/when" component={RegisterWhenContainer} />
          <Route exact path="/search" component={SearchMatchesContainer} />
          <Route exact path="/feed" component={PeopleFeedContainer} />
          <Route exact path="/profile" component={UserProfileContainer} />
          <Route exact path="/filter" component={UserFilterContainer} />
          <Route component={() =>(<Redirect to="/who" />)} />
        </Switch>
      </div>
    );
  }
}

export default App;
