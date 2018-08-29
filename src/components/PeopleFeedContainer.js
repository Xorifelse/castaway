import * as React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import PeopleFeed from './PeopleFeed'
import {addPerson, remPerson} from '../actions/user'



//import {} from '../actions/'


class PeopleFeedContainer extends React.PureComponent {
  componentDidMount(){

  }

  like = () => {
    this.props.addPerson(this.props.user.feedCurrent)
  }

  dislike = () => {
    this.props.remPerson(this.props.user.feedCurrent)
  }
  
  render() {
    if(this.props.user.feedCurrent < this.props.db.dbMatches.length){
      return (
        <div>
          <PeopleFeed
            person={this.props.db.dbMatches[this.props.user.feedCurrent]}
            likeFn={this.like}
            dislikeFn={this.dislike}
          />
          <Link to="/profile">Link To User Profile</Link><br/>
          <Link to="/filter">Link To Filter Page</Link>
        </div>
      )
    }

    return (
      <div>No more matches in that area!</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    db: state.db
  }
}

export default connect(mapStateToProps, {addPerson, remPerson})(PeopleFeedContainer)