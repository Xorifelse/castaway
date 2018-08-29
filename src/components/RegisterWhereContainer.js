import * as React from 'react'
import { connect } from 'react-redux'
import { allthepeople } from '../lib/People'
import RegisterWhere from './RegisterWhere'
import { setLocation } from '../actions/user'
import { pushDbResults } from '../actions/db'
import { db } from '../lib/db_init'

class RegisterWhereContainer extends React.PureComponent {
  handleInputChange = (event) => {
    this.props.setLocation(event.target.value)
  }

  componentDidMount() {
    const people = (pushDbResultsAction) => {
      let tmp = db.collection("people")
        .get()
        .then(querySnapshot => {
          const results = querySnapshot.docs.map(function (doc) {
            return doc.data()
          });
          pushDbResultsAction(results)
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        })
    }
    if (this.props.db.dbResults.length === 0) {
      people(this.props.pushDbResults)
    }
  }

  componentDidUpdate() {

  }

  allLocations = (peopleArr) => peopleArr.map(memb => {
    return memb.location
  })

  buttonContained = (city) => {
    if (this.props.user.location === city) {
      return 'contained'
    } else {
      return 'outlined'
    }
  }

  render() {
    if (this.props.db.dbResults.length === 0) return 'getting available cities...'
    return (
      <RegisterWhere
        cities={this.allLocations(this.props.db.dbResults).filter((item, pos, self) => self.indexOf(item) == pos)}
        setLocationFn={this.props.setLocation}
        buttonContainedFn={this.buttonContained}
        userObj={this.props.user}
        inputChangeFn={this.handleInputChange}
        inputValue={this.props.user.location}
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

export default connect(mapStateToProps, { setLocation, pushDbResults })(RegisterWhereContainer)