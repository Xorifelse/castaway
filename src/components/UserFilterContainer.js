import * as React from 'react'
import { connect } from 'react-redux'
import UserFilter from './UserFilter'

class UserFilterContainer extends React.PureComponent {
  render() {
    return (
      <UserFilter />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {})(UserFilterContainer)