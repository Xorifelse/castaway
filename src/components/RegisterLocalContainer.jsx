import * as React from 'react'
import { connect } from 'react-redux'
import { allthepeople } from '../lib/People'
import RegisterLocal from './RegisterLocal'
import { setLocation } from '../actions/user'
import {pushDbResults} from '../actions/db'
import db from '../lib/db_init'


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



class RegisterLocalContainer extends React.PureComponent {

    componentDidMount() {
        // if (this.props.db.dbResults.length === 0) {
            people(this.props.pushDbResults)
        // }
    }

    componentDidUpdate() {
        // console.log(this.props.db.dbResults)
        console.log('location', this.props.user.location)
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
        // if (this.props.db.dbResults.length === 0) return 'getting available cities...'
        return (
          <RegisterLocal 
            cities={this.allLocations(this.props.db.dbResults).filter((item, pos, self) => self.indexOf(item) == pos)}
            setLocationFn={this.props.setLocation} 
            buttonContainedFn={this.buttonContained}
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

export default connect(mapStateToProps, { setLocation, pushDbResults })(RegisterLocalContainer)