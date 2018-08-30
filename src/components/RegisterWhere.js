import * as React from 'react'
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

export default function RegisterWhere(props) {
  return (
    <Grid container spacing={16} direction="column" justify="center" alignItems="center">
      <Grid item>
        <Typography>
          {(props.userObj.type === 'local') && "Awesome. You're a Local?"}
          {(props.userObj.type === 'traveller') && "Awesome. You're a Traveller?"}
        </Typography>
        <Typography variant="headline" component="h2">
          {(props.userObj.type === 'local') && "Where do you live?"}
          {(props.userObj.type === 'traveller') && "Where are you headed?"}
        </Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={16} direction="row" justify="center" alignItems="center">
          <Grid item>
            <Typography>fill in your location or choose one from below</Typography>
          </Grid>

          <Grid>
            {/* input */}
            <TextField id="city" value={props.inputValue} onChange={(event) => props.inputChangeFn(event)} />
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        .
        </Grid>
      <Grid item>
        <Grid container spacing={16} direction="row" justify="center" alignItems="center">
          {/* map over cities with grid items */}
          {props.cities.map(location => <Button key={location} onClick={() => props.setLocationFn(location)} variant={props.buttonContainedFn(location)} color="primary">{location}</Button>)}
        </Grid>
      </Grid>
      <Grid item>
        {/* next button */}
        <Button variant='outlined' color="primary" disabled={(props.userObj.location !== '') ? false : true}><Link to={'/when'}>NEXT</Link></Button>
      </Grid>
    </Grid>
  )
}