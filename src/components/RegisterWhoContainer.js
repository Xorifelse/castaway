import * as React from 'react'
import {connect} from 'react-redux'
import RegisterWho from './RegisterWho'
import {setUserType, setUserName, setLookingFor, setLocation} from '../actions/user'


class RegisterWhoContainer extends React.PureComponent {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     name: ''
  //   }
  // }

  componentDidMount(){
  }

  componentDidUpdate() {
    // this.props.setUserName(this.state.name)
  }

  handleInputChange = (event) => {
    // this.setState({
    //   name: event.target.value
    // })
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