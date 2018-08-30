import * as React  from 'react'
import { connect } from 'react-redux'
import Grid        from '@material-ui/core/Grid'
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
          <Grid item only={['xs', 'sm']}><img src={splashXs} /></Grid>
          <Grid item only={['md', 'lg', 'xl']}><img src={splashLg} /></Grid>
        </Grid>
      )
    }

    return <RegisterWhoContainer />
  }
}

const mapStateToProps = (state) => {}

export default connect(mapStateToProps, {})(SplashContainer)