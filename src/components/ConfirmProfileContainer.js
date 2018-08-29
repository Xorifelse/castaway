import * as React from 'react'
import { connect } from 'react-redux'
import ConfirmProfile from './ConfirmProfile'



class ConfirmProfileContainer extends React.PureComponent {





  
  render() {
    return (
        <ConfirmProfile userObj={this.props.user}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {})(ConfirmProfileContainer)