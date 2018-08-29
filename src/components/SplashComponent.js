import * as React  from 'react'
import { connect } from 'react-redux'
import Grid        from '@material-ui/core/Grid'

import splashLg from '../../public/splashdesktop.png'
import splashXs from '../../public/splashdesktop.png'

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
          <Grid item xs>
            <img src={splashXs} />
          </Grid>
          <Grid item lg>
            <img src={splashLg} />
          </Grid>
        </Grid>
      )
    }

    return <RegisterWhoContainer />
  }
}

const mapStateToProps = (state) => {}

export default connect(mapStateToProps, {})(SplashContainer)