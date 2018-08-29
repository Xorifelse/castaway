import * as React from 'react'
import { connect } from 'react-redux'
import ConfirmProfile from './ConfirmProfile'
import db from '../lib/db_init'
import {setFirestoreID} from '../actions/user'



class ConfirmProfileContainer extends React.PureComponent {

  imgUrl = 'http://petervandijk.net/castaway/avatars/anonymous.jpg';

  dbAddPromise = (userObj) => {
    var addDoc = db.collection('people').add({...userObj, avatar:this.imgUrl}).then(ref => {
      console.log('Added document with ID: ', ref.id)
      this.props.setFirestoreID(ref.id)
    })
    return addDoc
  }




  render() {
    return (
        <ConfirmProfile 
          userObj={this.props.user}
          dbAddFn={this.dbAddPromise}
          />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {setFirestoreID})(ConfirmProfileContainer)