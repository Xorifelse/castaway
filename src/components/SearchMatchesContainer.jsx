import * as React from 'react'
import { connect } from 'react-redux'
import { allthepeople } from '../lib/People'
import SearchMatches from './SearchMatches'


const people = (dispatch) => {
    let tmp = db.collection("people")
        .get()
        .then(querySnapshot => {
            const results = querySnapshot.map(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                console.log(doc.data(), 'end of row')
                // results.push(doc.data())
                return doc.data()
            });
            // return querySnapshot.map((elem) => elem)
            dispatch({ type: 'GET_PEOPLE', payload: results })
        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        })
    // console.log('end of function' + a, tmp)
}


class SearchMatchesContainer extends React.PureComponent {

    componentDidMount() {

    }
    render() {
        people()
        return <SearchMatches />
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { setLocation })(SearchMatchesContainer)