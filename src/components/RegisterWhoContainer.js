import * as React from 'react'
import {connect} from 'react-redux'
import RegisterWho from './RegisterWho'
import {setUserType, setUserName, setLookingFor, setLocation} from '../actions/user'


class RegisterWhoContainer extends React.PureComponent {

  componentDidMount(){
    
  }

  render() {
    return <RegisterWho setTypeBtn={this.props.setUserType}/>
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {setUserType, setUserName, setLookingFor, setLocation})(RegisterWhoContainer)