import * as React from 'react'
import { connect } from 'react-redux'
import RegisterWhen from './RegisterWhen'

import {setDateFrom, setDateUntil} from '../actions/user'

class RegisterWhenContainer extends React.PureComponent {
  state = {
    errorFrom: false,
    errorUntil: false,
    helperTextFrom: '',
    helperTextUntil: ''
  }

  handleFrom = (e) => {
    let d = new Date(e.target.value)
    if(d.getTime() + 90000000 >= (new Date().getTime())){
      this.setState({errorFrom: false, helperTextFrom: null})
      this.props.setDateFrom(d)
    } else {
      this.setState({errorFrom: true, helperTextFrom: "Don't get stuck in the past!"})
      this.props.setDateFrom(null)
    }
  }

  handleUntil = (e) => {
    let d = new Date(e.target.value)
    let min = new Date(this.props.user.dateFrom)
    
    if(d.getTime() >= min.getTime()){
      this.setState({errorUntil: false, helperTextUntil: null})
      this.props.setDateUntil(d)
    } else {
      this.setState({errorUntil: true, helperTextUntil: "Please select a date from when you are travelling"})
      this.props.setDateUntil(null)
    }
  }

  render() {
    return (
      <RegisterWhen
        user={this.props.user}
        onChangeFromFn={this.handleFrom}
        onChangeUntilFn={this.handleUntil}
        inputErrorFrom={this.state.errorFrom}
        inputErrorUntil={this.state.errorUntil}
        inputErrorFromHelper={this.state.helperTextFrom}
        inputErrorUntilHelper={this.state.helperTextUntil}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, {setDateFrom, setDateUntil})(RegisterWhenContainer)