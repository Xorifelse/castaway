import * as React from 'react'
import { connect } from 'react-redux'
import UserNationality from './UserNationality'
import { setNationality } from '../actions/user'
import { pushDbResults } from '../actions/db'
import { db } from '../lib/db_init'

class UserNationalityContainer extends React.PureComponent {
  handleInputChange = (event) => {
    this.props.setNationality(event.target.value)
  }

  componentDidMount() {
    const people = (pushDbResultsAction) => {
      db.collection("people")
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

  allNationalities = (peopleArr) => peopleArr.map(memb => {
    return memb.nationality
  })

  buttonContained = (nationality) => {
    if (this.props.user.nationality.toLowerCase() === nationality.toLowerCase()) {
      return 'contained'
    } else {
      return 'outlined'
    }
  }

  render() {
    if (this.props.db.dbResults.length === 0) return 'getting available cities...'
    return (
      <UserNationality
        nationalities={Array.from(new Set(this.allNationalities(this.props.db.dbResults))).filter(nationality => {
          if (this.props.user.nationality.length > 0) {
            return nationality.toLowerCase().includes(this.props.user.nationality.toLowerCase())
          } else {
            return true
          }
        })}
        setNationalityFn={this.props.setNationality}
        buttonContainedFn={this.buttonContained}
        userObj={this.props.user}
        inputChangeFn={this.handleInputChange}
        inputValue={this.props.user.nationality}
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

export default connect(mapStateToProps, { setNationality, pushDbResults })(UserNationalityContainer)