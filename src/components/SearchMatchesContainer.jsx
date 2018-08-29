import * as React from 'react'
import { connect } from 'react-redux'
import { allthepeople } from '../lib/People'
import SearchMatches from './SearchMatches'
import { pushDbResults, pushDbMatched } from '../actions/db'
import db from '../lib/db_init'
import PeopleFeedContainer from './PeopleFeedContainer';


class SearchMatchesContainer extends React.PureComponent {
    filterConstructor = () => {
        const peopleDB = db.collection("people")
        const filterArrary = []
        //All the filter are valued the first time
        filterArrary.push(peopleDB.where('type', '==', this.props.user.lookingFor)
            .where('location', '==', this.props.user.location)
            .get())
        //Date range should be added
        //  .where('dateFrom', '>=', this.props.user.dateFrom)
        //      .where('dateFrom', '<=', this.props.user.dateTo)
        //      .where('dateTo', '>=', this.props.user.dateFrom)
        //      .where('dateTo', '<=', this.props.user.dateTo)
        return filterArrary
    }

    people = (dispatch) => {
        // let tmp = Promise.all([type.get(), location.get()])
        let tmp = Promise.all(this.filterConstructor()) //Hardcoded, FIXME!
            .then(res => {
                res.forEach(r => {
                    r.docs.forEach(d => {

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
        if (this.props.db.dbMatches.length > 0) {
            return <PeopleFeedContainer />
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