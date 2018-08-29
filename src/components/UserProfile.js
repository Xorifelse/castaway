import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {Link} from 'react-router-dom'

function UserProfile(props) {

  return (
    <div>
      <div>Hi from UserProfile</div>
      <Link to="/feed">Back To Feed</Link>
    </div>
  )
}

const styles ={
};

export default withStyles(styles)(UserProfile)