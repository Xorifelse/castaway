import * as React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import PeopleFeed from './PeopleFeed'



//import {} from '../actions/'


class PeopleFeedContainer extends React.PureComponent {
  render() {
    return (
      <div>
        <PeopleFeed />
        <Link to="/profile">Link To User Profile</Link><br/>
        <Link to="/filter">Link To Filter Page</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {})(PeopleFeedContainer)