import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {Link} from 'react-router-dom'

function RegisterTraveler(props) {

  return (
    <div>
      <div>Hi from RegisterTraveler</div>
      <Link to="/">Back To Beginning</Link>
    </div>
  )
}

const styles ={
}

export default withStyles(styles)(RegisterTraveler)