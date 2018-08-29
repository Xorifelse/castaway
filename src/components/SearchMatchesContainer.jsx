import * as React from 'react'
import { connect } from 'react-redux'
import { allthepeople } from '../lib/People'
import SearchMatches from './SearchMatches'
import { pushDbResults, pushDbMatched } from '../actions/db'
import db from '../lib/db_init'


const peopleDB = db.collection("people")
// const type = peopleDB.where('type', '==', 'traveller')
// const location = peopleDB.where('location', '==', 'Amsterdam')
// const hobbies = peopleDB.where(['soccer', 'craft beers']
// const group = peopleDB.where('false
// const date_from = peopleDB.where('2018-09-01'
// const date_to = peopleDB.where('2018-09-28'
// const age = peopleDB.where('age', '>', 36)


class SearchMatchesContainer extends React.PureComponent {

    /*  filterConstructor = () => {
         const filterArrary = []
         // if (this.props.user.type && this.props.user.type !== '') {
         //     filterArrary.push(peopleDB.where('type', '==', this.props.user.type).get())
         // } else if (this.props.user.location && this.props.user.location !== '') {
         //     filterArrary.push(peopleDB.where('location', '==', this.props.user.location).get())
         // } else if (this.props.user.lookingFor && this.props.user.lookingFor !== '') {
         //     filterArrary.push(peopleDB.where('lookingFor', '==', this.props.user.lookingFor).get())
         // } 
         // else if (this.props.user.date_from && this.props.user.user.date_from !== '' &&
         //     this.props.user.date_to && this.props.user.user.date_to !== '') {
         //     filterArrary.push(peopleDB.where('date_from', '>=', this.props.user.date_from)
         //         .where('date_to', '>=', this.props.user.date_to).get())
         // }
 
         //All the filter are valued the first time
         filterArrary.push(peopleDB.where('type', '==', this.props.user.type)
             .where('location', '==', this.props.user.location)
             .get())
         //Date range should be added
         return filterArrary
     } */

    people = (dispatch) => {
        // let tmp = Promise.all([type.get()]) //Hardcoded, FIXME!
        // let tmp = Promise.all(this.filterConstructor()) //Hardcoded, FIXME!
        db.collection("people")
            .get()
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

    componentDidMount() {
        this.people(this.props.pushDbMatched)
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