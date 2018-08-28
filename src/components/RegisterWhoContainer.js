import * as React from 'react'
import {connect} from 'react-redux'
import RegisterWho from './RegisterWho'
import {setUserType, setUserName, setLookingFor, setLocation, setGroup} from '../actions/user'


class RegisterWhoContainer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      btnTypeTrav: 'outlined',
      btnTypeLoc: 'outlined',
      btnLookingTrav: 'outlined',
      btnLookingLoc: 'outlined',
      btnGroupFalse: 'outlined',
      btnGroupTrue: 'outlined'
    }
  }

  componentDidMount(){
  }

  componentDidUpdate() {
  // buttons variant
    if (this.props.user.type === 'traveller' ) {
      this.setState({
        btnTypeTrav: 'contained',
        btnTypeLoc: 'outlined'
      })
    }
    if (this.props.user.type === 'local' ) {
      this.setState({
        btnTypeTrav: 'outlined',
        btnTypeLoc: 'contained'
      })
    }
    if (this.props.user.lookingFor === 'local' ) {
      this.setState({
        btnLookingTrav: 'outlined',
        btnLookingLoc: 'contained'
      })
    }
    if (this.props.user.lookingFor === 'traveller' ) {
      this.setState({
        btnLookingTrav: 'contained',
        btnLookingLoc: 'outlined'
      })
    }
    if (this.props.user.group === false ) {
      this.setState({
        btnGroupFalse: 'contained',
        btnGroupTrue: 'outlined'
      })
    }
    if (this.props.user.group === true ) {
      this.setState({
        btnGroupFalse: 'outlined',
        btnGroupTrue: 'contained'
      })
    }
  }

  handleInputChange = (event) => {

    this.props.setUserName(event.target.value)
  }

 

  render() {
    return (
        <RegisterWho 
          userObj={this.props.user}
          setTypeBtn={this.props.setUserType} 
          userType={this.props.user.type}
          setLookingForBtn={this.props.setLookingFor}
          inputChangeFn={this.handleInputChange}
          inputValue={this.props.user.name}
          btnTypeLoc={this.state.btnTypeLoc}
          btnTypeTrav={this.state.btnTypeTrav}
          btnLookingTrav={this.state.btnLookingTrav}
          btnLookingLoc={this.state.btnLookingLoc}
          btnGroupFalse={this.state.btnGroupFalse}
          btnGroupTrue={this.state.btnGroupTrue}
          setGroupBtn={this.props.setGroup}
          />

    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {setUserType, setUserName, setLookingFor, setLocation, setGroup})(RegisterWhoContainer)