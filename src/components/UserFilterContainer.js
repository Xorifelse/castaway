import * as React from 'react'
import { connect } from 'react-redux'
import UserFilter from './UserFilter'
import { setLocation, setLookingFor } from '../actions/user'

class UserFilterContainer extends React.PureComponent {

  buttonContained = (city) => {
    if (this.props.user.location === city) {
      return 'contained'
    } else {
      return 'outlined'
    }
  }

  allLocations = (peopleArr) => peopleArr.map(memb => {
    return memb.location
  })
  allLK = (a) => a.map(memb => {  //FIX ME: the current selection is not highlighted
    return memb.lookingFor
  })

  // allHobbies = (hobbiesArr) => hobbiesArr.map(memb => {
  //   return memb.hobies
  // })

  render() {
    return <UserFilter
      lookingFor={this.allLK(this.props.db.dbResults).filter((item, pos, self) => self.indexOf(item) == pos)}
      setLookingForFn={this.props.setLookingFor}
      cities={this.allLocations(this.props.db.dbResults).filter((item, pos, self) => self.indexOf(item) == pos)}
      setLocationFn={this.props.setLocation}

      // group={['alone, group']}
      // hobbies={this.allHobbies(this.props.db.dbResults).filter((item, pos, self) => self.indexOf(item) == pos)}
      // setHobbiesFn={this.props.setHobbies}
      buttonContainedFn={this.buttonContained}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    db: state.db
  }
}

export default connect(mapStateToProps, { setLocation, setLookingFor })(UserFilterContainer)