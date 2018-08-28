import * as React from 'react'
import { connect } from 'react-redux'
import RegisterDatePicker from './RegisterDatePicker'



import {setDateFrom, setDateUntil} from '../actions/user'




class RegisterDatePickerContainer extends React.PureComponent {
  componentDidMount(){


  }

  buttonNext(){

  }

  handleFrom = (e) => {
    let d = new Date(e.target.value)
    if(d.getTime() >= (new Date().getTime())){
      this.props.setDateFrom(d)
    } else {
      this.props.setDateFrom(null)
    }
  }

  handleUntil = (e) => {
    let d = new Date(e.target.value)
    let min = new Date(this.props.user.dateFrom)
    
    if(d.getTime() > min.getTime()){
      this.props.setDateUntil(d)
    } else {
      this.props.setDateUntil(null)
    }
  }

  render() {
    return (
      <RegisterDatePicker
        user={this.props.user}
        onChangeFromFn={this.handleFrom}
        onChangeUntilFn={this.handleUntil}
        next={this.buttonNext}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {setDateFrom, setDateUntil})(RegisterDatePickerContainer)