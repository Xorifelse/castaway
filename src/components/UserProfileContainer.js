import * as React from 'react'
import { connect } from 'react-redux'
import UserProfile from './UserProfile'
import RegisterWho from './RegisterWho'
import RegisterWhereContainer from './RegisterWhereContainer'
import RegisterWhenContainer from './RegisterWhenContainer'
import { setUserType, setUserName, setLookingFor, setLocation, setGroup } from '../actions/user'

class UserProfileContainer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      // btnTypeTrav: 'outlined',
      // btnTypeLoc: 'outlined',
      // btnLookingTrav: 'outlined',
      // btnLookingLoc: 'outlined',
      // btnGroupFalse: 'outlined',
      // btnGroupTrue: 'outlined',
      userType: false,
      lookingFor: false
    }
  }

  handleInputChange = (event) => {
    this.props.setUserName(event.target.value)
  }

  handleUserTypeChange = event => {
    this.setState({ userType: event.target.checked })
    if (this.state.userType === false) {
      this.props.setUserType('local')
    } else {
      this.props.setUserType('traveller')
    }
  }

  handleUserLookingForChange = event => {
    this.setState({ userLookingFor: event.target.checked })
    if (this.state.userLookingFor === true) {
      this.props.setLookingFor('traveller')
    } else {
      this.props.setLookingFor('local')
    }
  }

  render() {
    return (
      <div>
        <UserProfile />

        <RegisterWho
          userObj={this.props.user}//
          // setTypeBtn={this.props.setUserType}
          // setIfLocal={this.setIfLocalFn}
          // userType={this.props.user.type}
          setLookingForBtn={this.props.setLookingFor}//
          inputChangeFn={this.handleInputChange}//
          inputValue={this.props.user.name}//
          // btnTypeLoc={this.state.btnTypeLoc}
          // btnTypeTrav={this.state.btnTypeTrav}
          // btnLookingTrav={this.state.btnLookingTrav}
          // btnLookingLoc={this.state.btnLookingLoc}
          // btnGroupFalse={this.state.btnGroupFalse}
          // btnGroupTrue={this.state.btnGroupTrue}
          // setGroupBtn={this.props.setGroup}
          userTypeChangeFn={this.handleUserTypeChange}//
          userTypeBool={this.state.userType}//
          userLookingForChangeFn={this.handleUserLookingForChange}//
          userLookingForBool={this.state.userLookingFor}//
          userProfile={true}
        />

        {/* <RegisterWhere
        cities={Array.from(new Set(this.allLocations(this.props.db.dbResults))).filter(city => {
          if(this.props.user.location.length > 0){
            return city.toLowerCase().includes(this.props.user.location.toLowerCase())
          } else {
            return true
          }
        })}
        setLocationFn={this.props.setLocation}
        buttonContainedFn={this.buttonContained}
        userObj={this.props.user}
        inputChangeFn={this.handleInputChange}
        inputValue={this.props.user.location}
        /> */}
        <RegisterWhereContainer />
        <RegisterWhenContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    db: state.db
  }
}

export default connect(mapStateToProps, { setUserType, setUserName, setLookingFor, setLocation, setGroup })(UserProfileContainer)