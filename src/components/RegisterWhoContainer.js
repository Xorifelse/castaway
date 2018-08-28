import * as React from 'react'
import {connect} from 'react-redux'
import RegisterWho from './RegisterWho'
import {setUserType, setUserName, setLookingFor, setLocation} from '../actions/user'


class RegisterWhoContainer extends React.PureComponent {

  componentDidMount(){
    
  }

  render() {
    return (
        <RegisterWho 
          userObj={this.props.user}
          setTypeBtn={this.props.setUserType} 
          userType={this.props.user.type}
          setLookingForBtn={this.props.setLookingFor}
          />

    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {setUserType, setUserName, setLookingFor, setLocation})(RegisterWhoContainer)