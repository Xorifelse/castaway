import * as React from 'react'
import { connect } from 'react-redux'
import ConfirmProfile from './ConfirmProfile'
import {db, storage, firebase} from '../lib/db_init'
import {setFirestoreID, setAvatarUrl} from '../actions/user'



class ConfirmProfileContainer extends React.PureComponent {

  

  dbAddPromise = (userObj) => {
    var addDoc = db.collection('people').add({...userObj}).then(ref => {
      console.log('Added document with ID: ', ref.id)
      this.props.setFirestoreID(ref.id)
    })
    return addDoc
  }

  uploadToStorage = (file: FileList) => { // vs code says this is wrong but it works.. check it out?! PvD --- That is called TypeScript (Javascript with variable type declaration)! We will use this soon enough! JK
    const storageRef = storage.ref() // storage is exported from /lib/db_init.js

      // Create the file metadata
      var metadata = {
        contentType: 'image/jpeg'
      };

      // Upload file and metadata to the object 'images/mountains.jpg'
      let randomString = Math.random().toString(36).substring(7) // generate random string
      var uploadTask = storageRef.child('images/' + file.name + randomString).put(file, metadata);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function(snapshot) {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running');
              break;
          }
        }, function(error) {

        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      }, () => {
        
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log('File available at', downloadURL);
          this.props.setAvatarUrl(downloadURL)
          
        });
      });
  }




  render() {
    return (
        <ConfirmProfile 
          userObj={this.props.user}
          dbAddFn={this.dbAddPromise}
          imgUploadFn={this.uploadToStorage} //uploadToStorage // uploadTryout
        />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {setFirestoreID, setAvatarUrl})(ConfirmProfileContainer)