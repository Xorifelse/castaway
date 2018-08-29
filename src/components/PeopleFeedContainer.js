import * as React  from 'react'
import {connect}   from 'react-redux'
import {Link}      from 'react-router-dom'
import Button      from '@material-ui/core/Button'

import {
  addPerson,
  removePerson,
  nextPerson,
  previousPerson
} from '../actions/user'

import PeopleFeed from './PeopleFeed'
import Swipeable  from 'react-swipeable'

class PeopleFeedContainer extends React.PureComponent {
  swiping(e, deltaX, deltaY, absX, absY, velocity) {
    // this can be used to set the image position
    // Or we can use react-animated-css
  }

  swipedUp = (e, deltaY, isFlick) => {
    this.props.addPerson(this.props.user.feedCurrent)
  }

  swipedRight = (e, deltaY, isFlick) => {
    this.props.nextPerson()
  }

  swipedDown = (e, deltaY, isFlick) => {
    this.props.removePerson(this.props.user.feedCurrent)
  }

  swipedLeft = (e, deltaY, isFlick) => {
    this.props.previousPerson()
  }

  like = () => {
    this.props.addPerson(this.props.user.feedCurrent)
  }

  dislike = () => {
    this.props.removePerson(this.props.user.feedCurrent)
  }
  
  render() {
    if(this.props.user.feedCurrent < this.props.db.dbMatches.length){
      return (
        <div>
          <Swipeable
            onSwipedUp={this.swipedUp}
            onSwipedRight={this.swipedRight}
            onSwipedDown={this.swipedDown}
            onSwipedLeft={this.swipedLeft} >
              <PeopleFeed
                person={this.props.db.dbMatches[this.props.user.feedCurrent]}
                likeFn={this.like}
                dislikeFn={this.dislike}
              />
          </Swipeable>

          <Link to="/profile"><Button variant="contained" color="primary">Profile</Button></Link>
          <Link to="/filter"><Button variant="contained" color="primary">Filter</Button></Link>
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

export default connect(mapStateToProps, {addPerson, removePerson, nextPerson, previousPerson})(PeopleFeedContainer)