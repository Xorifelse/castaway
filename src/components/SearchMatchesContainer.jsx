import * as React from 'react'
import { connect } from 'react-redux'
import SearchMatches from './SearchMatches'
import { pushDbResults, pushDbMatched } from '../actions/db'
import { db } from '../lib/db_init'
import PeopleFeedContainer from './PeopleFeedContainer';


class SearchMatchesContainer extends React.PureComponent{
  state = {
    expired: false
  }

  filterConstructor = () => {
    const peopleDB = db.collection("people")
    const filterArrary = []

    filterArrary.push(peopleDB
      .where('type', '==', this.props.user.lookingFor)
      .where('location', '==', this.props.user.location)
      .get())

    return filterArrary
  }

  people = (dispatch) => {
    // let tmp = Promise.all([type.get(), location.get()])
    let tmp = Promise.all(this.filterConstructor()) //Hardcoded, FIXME!
      .then(res => {

        res.forEach(r => {
          r.docs.forEach(d => {
            let person = d.data()
            let dateFrom = new Date(this.props.user.dateFrom).getTime() / 1000
            let dateTo = new Date(this.props.user.dateTo).getTime() / 1000

            if (person.dateFrom.seconds <= dateFrom && dateTo <= person.dateTo.seconds) {
              dispatch(person)
            }
          });
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      })
  }

  componentDidMount() {
    this.people(this.props.pushDbMatched)

    // Set a timer so the message changes when no matches are returned quickly enough.
    setTimeout(() => {
      this.setState({
        expired: true
      })
    }, 5000)
  }

  render() {
    if(!this.state.expired){
      if (this.props.db.dbMatches.length > 0) {
        return <PeopleFeedContainer />
      }
    } else {
      return <div>No Matches Found!</div>
    }

    return <div>Searching....</div>
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    db: state.db
  }
}

export default connect(mapStateToProps, { pushDbResults, pushDbMatched })(SearchMatchesContainer)