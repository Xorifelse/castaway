import * as React from 'react'
import propTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'


// import { allthepeople } from '../lib/People'
const displayLookingFor = (propsA) => {
  return (
    <Grid item>
    <Typography variant="headline" component="h2">
      What are you looking for? 
    </Typography>
    <Grid container spacing={16} direction="row" justify="center" alignItems="center">
      <Grid><Button onClick={() => propsA.setLookingForBtn('traveller')} variant="contained" color="primary">Traveller</Button></Grid>
      <Grid><Button onClick={() => propsA.setLookingForBtn('local')} variant="contained" color="primary">Local</Button></Grid>
    </Grid>
  </Grid>
  )
}


function RegisterWho(props) {
  return (
    <Grid container spacing={16} direction="column" justify="center" alignItems="center">
      <Grid item>
      <Typography variant="headline" component="h2">
          What's your name? 
        </Typography>
        <Grid container spacing={16} direction="row" justify="center" alignItems="center">
          <Grid item>
            {/* input */}
            <TextField id="name" value={props.inputValue} onChange={(event) => props.inputChangeFn(event)} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="headline" component="h2">
          Are you a traveller or local?
        </Typography>
        <Grid container spacing={16} direction="row" justify="center" alignItems="center">
          <Grid><Button onClick={() => props.setTypeBtn('traveller')} variant="contained" color="primary">Traveller</Button></Grid>
          <Grid><Button onClick={() => props.setTypeBtn('local')} variant="contained" color="primary">Local</Button></Grid>
        </Grid>
      </Grid>
      {/* only display below if user.type is set */}
      {(props.userObj.type !== '' && props.userObj.type !== 'local') && displayLookingFor(props)}

    </Grid>
    
  )
}

const styles = {
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