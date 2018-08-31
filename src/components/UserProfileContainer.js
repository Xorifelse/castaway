import * as React from 'react'
import { connect } from 'react-redux'
import UserProfile from './UserProfile'

class UserProfileContainer extends React.PureComponent {
  render() {
    return (
      <UserProfile />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {})(UserProfileContainer)