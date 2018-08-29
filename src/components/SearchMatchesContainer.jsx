import * as React from 'react'
import { connect } from 'react-redux'
import { allthepeople } from '../lib/People'
import SearchMatches from './SearchMatches'
import {pushDbResults, pushDbMatched} from '../actions/db'
import db from '../lib/db_init'


const peopleDB = db.collection("people")
const type = peopleDB.where('type', '==', '')
const location = peopleDB.where('location', '==', 'Amsterdam')
// const hobbies = peopleDB.where(['soccer', 'craft beers']
// const group = peopleDB.where('false
// const date_from = peopleDB.where('2018-09-01'
// const date_to = peopleDB.where('2018-09-28'
const age = peopleDB.where('age', '>', 36)

const people = (dispatch) => {
    let tmp = Promise.all([type.get()]) //Hardcoded, FIXME!
        .then(res => {
            res.forEach(r => {
                r.docs.forEach(d => {
                    console.log('Get:', d.data());
                    dispatch(d.data())
                });
            });
        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        })
}



class SearchMatchesContainer extends React.PureComponent {

    componentDidMount() {
        people(this.props.pushDbMatched)
    }
    render() {

        return null
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user,
        db: state.db
    }
}

export default connect(mapStateToProps, { pushDbResults, pushDbMatched })(SearchMatchesContainer)