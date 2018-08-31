import * as React from 'react'
import { connect } from 'react-redux'
import UserProfile from './UserProfile'
import RegisterWho from './RegisterWho'
import RegisterWhereContainer from './RegisterWhereContainer'
import RegisterWhenContainer from './RegisterWhenContainer'
import UserNationalityContainer from './UserNationalityContainer'
import { setUserType, setUserName, setLookingFor, setLocation, setGroup, setAvatarUrl } from '../actions/user'
import {storage, firebase} from '../lib/db_init'

class UserProfileContainer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      // btnTypeTrav: 'outlined',
      // btnTypeLoc: 'outlined',
      // btnLookingTrav: 'outlined',
      // btnLookingLoc: 'outlined',
      // btnGroupFalse: 'outlined',
      // btnGroupTrue: 'outlined',
      userType: false,
      lookingFor: false
    }
  }

  handleInputChange = (event) => {
    this.props.setUserName(event.target.value)
  }

  handleUserTypeChange = event => {
    this.setState({ userType: event.target.checked })
    if (this.state.userType === false) {
      this.props.setUserType('local')
    } else {
      this.props.setUserType('traveller')
    }
  }

  handleUserLookingForChange = event => {
    this.setState({ userLookingFor: event.target.checked })
    if (this.state.userLookingFor === true) {
      this.props.setLookingFor('traveller')
    } else {
      this.props.setLookingFor('local')
    }
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
      function (snapshot) {
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
          default:
        }
      }, function (error) {
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
          default:
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
      <div>
        {<UserProfile
          avatar={this.props.user.avatar}
          imgUploadFn={this.uploadToStorage}
        />}

        <RegisterWho
          userObj={this.props.user}//
          // setTypeBtn={this.props.setUserType}
          // setIfLocal={this.setIfLocalFn}
          // userType={this.props.user.type}
          setLookingForBtn={this.props.setLookingFor}//
          inputChangeFn={this.handleInputChange}//
          inputValue={this.props.user.name}//
          // btnTypeLoc={this.state.btnTypeLoc}
          // btnTypeTrav={this.state.btnTypeTrav}
          // btnLookingTrav={this.state.btnLookingTrav}
          // btnLookingLoc={this.state.btnLookingLoc}
          // btnGroupFalse={this.state.btnGroupFalse}
          // btnGroupTrue={this.state.btnGroupTrue}
          // setGroupBtn={this.props.setGroup}
          userTypeChangeFn={this.handleUserTypeChange}//
          userTypeBool={this.state.userType}//
          userLookingForChangeFn={this.handleUserLookingForChange}//
          userLookingForBool={this.state.userLookingFor}//
          userProfile={true}
        />

        <UserNationalityContainer />

        {/* <RegisterWhere
        cities={Array.from(new Set(this.allLocations(this.props.db.dbResults))).filter(city => {
          if(this.props.user.location.length > 0){
            return city.toLowerCase().includes(this.props.user.location.toLowerCase())
          } else {
            return true
          }
        })}
        setLocationFn={this.props.setLocation}
        buttonContainedFn={this.buttonContained}
        userObj={this.props.user}
        inputChangeFn={this.handleInputChange}
        inputValue={this.props.user.location}
        /> */}
        <RegisterWhereContainer userProfile={true} />
        <RegisterWhenContainer userProfile={true} />

        {/* Profile HOBBIES */}
        {/* <UserHobbiesContainer /> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    db: state.db
  }
}

export default connect(mapStateToProps, { setUserType, setUserName, setLookingFor, setLocation, setGroup, setAvatarUrl })(UserProfileContainer)