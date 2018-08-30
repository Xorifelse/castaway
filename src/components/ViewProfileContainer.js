import * as React from 'react'
import { connect } from 'react-redux'
import ViewProfile from './ViewProfile'

class ViewProfileContainer extends React.PureComponent {
  render() {
    return (
      <ViewProfile />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {})(ViewProfileContainer)