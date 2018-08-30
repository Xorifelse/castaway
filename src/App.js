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
import ConfirmProfileContainer from './components/ConfirmProfileContainer'
import SplashComponent from './components/SplashComponent';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import 'typeface-roboto'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#BE8D8A'
    },
    secondary: {
      main: '#009688'
    },
    
  },
  overrides: {
    MuiInput: {
      underline: {
        "&&&&:hover:before": {
          borderBottom: "1px solid rgba(0, 150, 136, 0.42)"
        },
        "&&&&:hover:after": {
          borderBottom: "2px solid rgba(0, 150, 136, 0.42)"
        },
        '&:after': {
          borderBottom: "3px solid rgba(0, 150, 136, 0.42)"
        }
        
      }
    }
  }
})


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={SplashComponent} />
            <Route exact path="/who" component={RegisterWhoContainer} />
            <Route exact path="/where" component={RegisterWhereContainer} />
            <Route exact path="/when" component={RegisterWhenContainer} />
            <Route exact path="/confirm" component={ConfirmProfileContainer} />
            <Route exact path="/search" component={SearchMatchesContainer} />
            <Route exact path="/feed" component={PeopleFeedContainer} />
            <Route exact path="/profile" component={UserProfileContainer} />
            <Route exact path="/filter" component={UserFilterContainer} />
            <Route component={() =>(<Redirect to="/" />)} />
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
