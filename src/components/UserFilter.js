import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {Link} from 'react-router-dom'

function UserFilter(props) {
  return (
    <div>
      <div>Hi from UserFilter</div>
      <Link to="/feed">Back To Feed</Link>
    </div>
  )
}

const styles ={
};

export default withStyles(styles)(UserFilter)