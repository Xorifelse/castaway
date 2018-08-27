import React, { Component } from 'react';

import {Switch, Route, Link} from 'react-router-dom'

import Skeleton from './components/SkeletonContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Skeleton />
      </div>
    );
  }
}

export default App;
