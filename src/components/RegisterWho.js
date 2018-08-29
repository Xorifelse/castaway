import * as React from 'react'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import Button         from '@material-ui/core/Button'
import Grid           from '@material-ui/core/Grid'
import Card           from '@material-ui/core/Card'
import CardContent    from '@material-ui/core/CardContent'
import Typography     from '@material-ui/core/Typography'
import TextField      from '@material-ui/core/TextField'
import Switch         from '@material-ui/core/Switch'
import AppBar         from '@material-ui/core/AppBar';
import Toolbar        from '@material-ui/core/Toolbar';


import { width } from 'window-size';

// import { allthepeople } from '../lib/People'
const displayLookingFor = (props) => {
  return (
    <Grid item>
    <Typography variant="headline" component="h2">
      Looking for a... 
    </Typography>
    <Grid container spacing={16} direction="row" justify="center" alignItems="center">
      <Grid item><Button onClick={() => props.setLookingForBtn('traveller')} variant={props.btnLookingTrav} color="primary">Traveller</Button></Grid>
      <Grid item><Button onClick={() => props.setLookingForBtn('local')} variant={props.btnLookingLoc} color="primary">Local</Button></Grid>
    </Grid>
  </Grid>
  )
}

const displayGroup = (props) => {
  return (
    <Grid item>
    <Typography variant="headline" component="h2">
      Are you alone or in a group/ couple? 
    </Typography>
    <Grid container spacing={16} direction="row" justify="center" alignItems="center">
      <Grid item><Button onClick={() => props.setGroupBtn(false)} variant={props.btnGroupFalse} color="primary">Alone</Button></Grid>
      <Grid item><Button onClick={() => props.setGroupBtn(true)} variant={props.btnGroupTrue} color="primary">Group/ couple</Button></Grid>
    </Grid>
  </Grid>
  )
}


function RegisterWho(props) {
  return (
    <Grid container spacing={16} direction="column" justify="center" alignItems="center">
      <Grid item>
      <Typography>
          Hi! I don't think we've met yet. 
        </Typography>
      <Typography variant="headline" component="h2">
          Who are you? 
        </Typography>
        <Grid container spacing={16} direction="row" justify="center" alignItems="center">
          <Grid item>
            <Typography>Hi, my name is...</Typography>
            {/* input */}
            <TextField id="name" value={props.inputValue} onChange={(event) => props.inputChangeFn(event)} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="headline" component="h2">
          and I'm a...
        </Typography>
        <Grid container spacing={16} direction="row" justify="center" alignItems="center">
          <Grid item><Button onClick={() => props.setTypeBtn('traveller')} variant={props.btnTypeTrav} color="primary">Traveller</Button></Grid>
          <Grid item><Button onClick={() => props.setIfLocal('local')} variant={props.btnTypeLoc} color="primary">Local</Button></Grid>
        </Grid>
      </Grid>
      {/* only display below if user.type is set */}
      {(props.userObj.type !== '' && props.userObj.type !== 'local') && displayLookingFor(props)}
      {(props.userObj.lookingFor !== '' || props.userObj.type === 'local') && displayGroup(props)}
      <Grid item>
      <Link to="/where"><Button disabled={(props.userObj.name !== '' && props.userObj.type !== '' && props.userObj.lookingFor !== '' && props.userObj.group !== null) ? false : true} variant='outlined' color="primary">Next</Button></Link>
      </Grid>
    </Grid>

  )
}

const styles = {
  top: {
    background: '#868686',
    textAlign: "center",

  },
  welcome: {
    background: '#a1a1a1',
    textAlign: "center"
  },
  hi: {
    background: '#a1a1a1',
    padding: '15px 0 15px 0',
  },
  who: {
    fontSize: '30px',
    background: '#a1a1a1',
    padding: '0 0 10px 0',
    textAlign: "center"
  },
  nameInput: {
    paddingTop: '50px',
    textAlign: 'center'
  },

  content: {
    background: '#FFF',
  },
  title: {
    color: 'gray'
  },
  card: {
    minWidth: 150
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    // marginBottom: 24,
  },
  header: {
    marginTop: 16,
    marginBottom: 16,
    fontSize: 48
  }
}

export default withStyles(styles)(RegisterWho)