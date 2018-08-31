import * as React from 'react'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

export default function UserNationality(props) {
  return (
    <Grid container spacing={16} direction="column" justify="center" alignItems="center">
      <Grid item>
        <Grid container spacing={16} direction="row" justify="center" alignItems="center">
          <Grid item>
            <Typography variant="title">
              fill in your nationality or choose one from below
          </Typography>
          </Grid>

          <Grid>
            {/* input */}
            <TextField id="nationality" value={props.inputValue}
              onChange={(event) => props.inputChangeFn(event)} />
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        .
        </Grid>
      <Grid item>
        <Grid container spacing={16} direction="row" justify="center" alignItems="center">
          {/* map over nationalities with grid items */}
          {props.nationalities.map(nationality => <Button key={nationality}
            onClick={() => props.setNationalityFn(nationality)}
            variant={props.buttonContainedFn(nationality)} color="primary">{nationality}</Button>)}
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={40}></Grid>
      </Grid>
    </Grid>
  )
}