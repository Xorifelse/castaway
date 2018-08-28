import * as React from 'react'
import {connect} from 'react-redux'
import RegisterDatePicker from './RegisterDatePicker'
//import {setUserType, setUserName, setLookingFor, setLocation} from '../actions/user'


class RegisterDatePickerContainer extends React.PureComponent {

  componentDidMount(){
    
  }

  render() {
    return (
      <RegisterDatePicker />

    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {})(RegisterDatePickerContainer)