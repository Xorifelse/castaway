import * as React from 'react'
import { connect } from 'react-redux'
import RegisterTraveler from './RegisterTraveler'



//import {} from '../actions/'


class RegisterTravelerContainer extends React.PureComponent {
  render() {
    return (
      <RegisterTraveler />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {})(RegisterTravelerContainer)