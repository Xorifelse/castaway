import * as React from 'react'
import { connect } from 'react-redux'
import { pushDbResults, pushDbMatched, clearMatched } from '../actions/db'
import { db } from '../lib/db_init'
import PeopleFeedContainer from './PeopleFeedContainer';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import SearchMatches from './SearchMatches';
import PeopleFeedNoMatches from './PeopleFeedNoMatches';


class SearchMatchesContainer extends React.PureComponent {
  state = {
    expired: false,
    fake: false
  }

  filterConstructor = () => {
    const peopleDB = db.collection("people")
    const filterArrary = []

    // const allLocations = (peopleArr) => peopleArr.map(memb => {
    //   return memb.location
    // })
    // let cities = allLocations(this.props.db.dbResults).filter((item, pos, self) => self.indexOf(item) === pos)

    // const dataExist = (field) => {
    //   if (field !== '') {
    //     return field
    //   } else {
    //     console.log("CITIES: " + cities)
    //     return cities
    //   }
    // }

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
    Promise.all(this.filterConstructor()) //Hardcoded, FIXME!
      .then(res => {

        res.forEach(r => {
          r.docs.forEach(d => {
            let person = d.data()
            person.docid = d.id
            let dateFrom = new Date(this.props.user.dateFrom).getTime() / 1000
            let dateTo = new Date(this.props.user.dateTo).getTime() / 1000

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
    if (this.props.db.dbMatches.length !== 0) {
      this.props.clearMatched() // DISABLED FOR TESTING !!!!!!!!!!!!!!!!!!!!!!!!!!
    }
    this.people(this.props.pushDbMatched)

    // Set a timer so the message changes when no matches are returned quickly enough.
    this.setState({
      timer: setTimeout(() => {
        this.setState({
          expired: true
        })
      }, 7000),
      fake: setTimeout(() => {
        this.setState({
          fake: true
        })
      }, 3000)
    })
  }

  render() {
    if (!this.state.expired) {
      if (this.props.db.dbMatches.length > 0) {
        clearTimeout(this.state.timer)

        // Fake loading screen
        if (this.state.fake === true) {
          return <PeopleFeedContainer />
        }
      }
    } else {
      return (
        // <div>
        //   <SearchMatches
        //     topMessage="We didn't find any matches!"
        //     message="Try changing your filters"
        //     loading={false}
        //   />
        //   <Link to="/profile"><Button variant="contained" color="primary">Profile</Button></Link>
        //   <Link to="/filter"><Button variant="contained" color="primary">Filter</Button></Link>
        // </div>
        <PeopleFeedNoMatches />
      )
    }

    return (
      <SearchMatches
        topMessage="We've created your profile!"
        message="Looking for matches..."
        loading={true}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    db: state.db
  }
}

export default connect(mapStateToProps, { pushDbResults, pushDbMatched, clearMatched })(SearchMatchesContainer)