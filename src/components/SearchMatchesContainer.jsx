import * as React from 'react'
import { connect } from 'react-redux'
import { allthepeople } from '../lib/People'
import SearchMatches from './SearchMatches'
import { pushDbResults, PUSH_DB_RESULTS } from '../actions/db'
import db from '../lib/db_init'

/* var brazilCities = citiesRef.where('state', '==', 'CA');
var smallCities = citiesRef.where('population', '<', 1000000);
var afterParis = citiesRef.where('name', '>=', 'San Francisco');

return Promise.all([brazilCities.get(), smallCities.get(), afterParis.get()]).then(res => {
    res.forEach(r => {
      r.forEach(d => {
        console.log('Get:', d);
      });
      console.log();
    });
  });
 */

const peopleDB = db.collection("people")
const type = peopleDB.where('type', '==', 'traveller')
const location = peopleDB.where('location', '==', 'Amsterdam')
// const hobbies = peopleDB.where(['soccer', 'craft beers']
// const group = peopleDB.where('false
// const date_from = peopleDB.where('2018-09-01'
// const date_to = peopleDB.where('2018-09-28'
const age = peopleDB.where('age', '>', 36)

const people = (dispatch) => {
    let tmp = Promise.all([type.get(), location.get()])
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


/////////
// let tmp = () => db.collection("people")
// .where()
// .where()
//     .get()
// .then(querySnapshot => {
//     console.log("sdsdsdsf: " + querySnapshot.docs)
//     const results = querySnapshot.docs.map(function (doc) {
//         console.log("sdsdsdsf: " + querySnapshot)
//         return doc.data()
//     });
//     dispatch(results)
// })
// .catch(function (error) {
//     console.log("Error getting documents: ", error);
// })



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
        user: state.user,
        db: state.db
    }
}

export default connect(mapStateToProps, { pushDbResults })(SearchMatchesContainer)