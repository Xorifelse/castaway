import * as React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import PeopleFeed from './PeopleFeed'
import SearchMatchesContainer from './SearchMatchesContainer';



//import {} from '../actions/'


class PeopleFeedContainer extends React.PureComponent {
  componentDidMount(){
    console.log(this.props.db)
  }
  
  render() {
    return (
      <div>
        <SearchMatchesContainer />
        <PeopleFeed />
        <Link to="/profile">Link To User Profile</Link><br/>
        <Link to="/filter">Link To Filter Page</Link>
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

export default connect(mapStateToProps, {})(PeopleFeedContainer)