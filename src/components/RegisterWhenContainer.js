import * as React from 'react'
import { connect } from 'react-redux'
import RegisterWhen from './RegisterWhen'



import {setDateFrom, setDateUntil} from '../actions/user'




class RegisterWhenContainer extends React.PureComponent {
  handleFrom = (e) => {
    let d = new Date(e.target.value)
    console.log(d.getTime(), new Date().getTime() - d.getTime())
    if(d.getTime() + 90000000 >= (new Date().getTime())) {
      this.props.setDateFrom(d)
    } else {
      this.props.setDateFrom(null)
    }
  }

  handleUntil = (e) => {
    let d = new Date(e.target.value)
    let min = new Date(this.props.user.dateFrom)
    
    if(d.getTime() >= min.getTime()){
      this.props.setDateUntil(d)
    } else {
      this.props.setDateUntil(null)
    }
  }

  render() {
    return (
      <RegisterWhen
        user={this.props.user}
        onChangeFromFn={this.handleFrom}
        onChangeUntilFn={this.handleUntil}
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