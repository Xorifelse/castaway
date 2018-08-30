import * as React from 'react'
import { connect } from 'react-redux'
import SearchMatches from './SearchMatches'
import { pushDbResults, pushDbMatched } from '../actions/db'
import { db } from '../lib/db_init'
import PeopleFeedContainer from './PeopleFeedContainer';


class SearchMatchesContainer extends React.PureComponent {
  state = {
    expired: false
  }

  filterConstructor = () => {
    const peopleDB = db.collection("people")
    const filterArrary = []

    const allLocations = (peopleArr) => peopleArr.map(memb => {
      return memb.location
    })
    let cities = allLocations(this.props.db.dbResults).filter((item, pos, self) => self.indexOf(item) == pos)

    const dataExist = (field) => {
      if (field !== '') {
        return field
      } else {
        console.log("CITIES: " + cities)
        return cities
      }
    }

    filterArrary.push(peopleDB
      .where('type', '==', this.props.user.lookingFor)
      .where('location', '==', this.props.user.location)  //FIX ME: retrieve all cities if the location filter isn't valued
      // .where('group', '==', this.props.user.group) //false -> alone, true -> group
      .get())

    return filterArrary
  }

  checkHobbies = person => {
    const userHobbies = this.props.user.hobbies //array
    // const userHobbies = ['yoga', 'jogging']
    if (userHobbies.length !== 0) {
      const filtered = userHobbies.filter(hobbie => person.hobbies.indexOf(hobbie) !== -1)
      if (filtered.length === userHobbies.length) {
        return true
      }
      return false
    }
    return true
  }

  people = (dispatch) => {
    // let tmp = Promise.all([type.get(), location.get()])
    let tmp = Promise.all(this.filterConstructor()) //Hardcoded, FIXME!
      .then(res => {

        res.forEach(r => {
          r.docs.forEach(d => {
            let person = d.data()
            person.docid = d.id
            let dateFrom = new Date(this.props.user.dateFrom).getTime() / 1000
            let dateTo = new Date(this.props.user.dateTo).getTime() / 1000

            console.log("date from: ", dateFrom)
            console.log("Person from: ", person.dateFrom.seconds)
            console.log("date to: ", dateTo)
            console.log("Person to: ", person.dateTo.seconds)

            if (dateFrom >= person.dateFrom.seconds && dateTo <= person.dateTo.seconds) {

              if (this.checkHobbies(person)) {

                dispatch(person)
              }
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
    this.setState({
      timer: setTimeout(() => {
        this.setState({
          expired: true
        })
      }, 5000)
    })
  }

  render() {
    if (!this.state.expired) {
      if (this.props.db.dbMatches.length > 0) {
        clearTimeout(this.state.timer)
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