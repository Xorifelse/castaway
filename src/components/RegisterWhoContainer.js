import * as React from 'react'
import {connect} from 'react-redux'

import RegisterWho from './RegisterWho'

class RegisterWhoContainer extends React.PureComponent {

  componentDidMount(){
    
  }

  render() {
    return <RegisterWho />
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(RegisterWhoContainer)