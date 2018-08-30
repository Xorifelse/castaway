import * as React  from 'react'
import { connect } from 'react-redux'
import Grid        from '@material-ui/core/Grid'
import Hidden      from '@material-ui/core/Hidden'
import RegisterWhoContainer from './RegisterWhoContainer'

import splashLg from '../img/splashdesktop.png'
import splashXs from '../img/splashmobile.png'

class SplashContainer extends React.PureComponent{
  state = {
    continue: false
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        continue: true
      })
    }, 2000)
  }

  render() {
    if(!this.state.continue){
      return (
        <Grid container spacing={16} direction="column">
          <Hidden only={['xs', 'sm']}>
          <Grid item ><img src={splashLg} /></Grid>
          </Hidden>

          <Hidden only={['md', 'lg', 'xl']}>
            <Grid item><img src={splashXs} /></Grid>
          </Hidden>
        </Grid>
      )
    }

    return <RegisterWhoContainer />
  }
}

const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps, {})(SplashContainer)