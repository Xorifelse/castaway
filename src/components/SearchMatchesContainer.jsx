import * as React from 'react'
import { connect } from 'react-redux'
import { allthepeople } from '../lib/People'
import SearchMatches from './SearchMatches'
import {pushDbResults} from '../actions/db'
import db from '../lib/db_init'


const people = (dispatch) => {
    let tmp = db.collection("people")
        .get()
        .then(querySnapshot => {
            
            const results = querySnapshot.docs.map(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                // console.log(doc.data(), 'end of row')
                // results.push(doc.data())
                return doc.data()
            });
            // return querySnapshot.map((elem) => elem)
            dispatch(results)
        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        })
    // console.log('end of function' + a, tmp)
}


class SearchMatchesContainer extends React.PureComponent {

    componentDidMount() {
        people(this.props.pushDbResults)
    }
    render() {
        
        return null
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { pushDbResults })(SearchMatchesContainer)