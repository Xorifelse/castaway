import * as React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

import { Link } from 'react-router-dom'

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

function stepThree(props) {
  const { classes, user } = props

  if (!user.dateFrom || !user.dateTo) {
    return null
  }

  const changingFilter = props.changingFilter
  console.log("CHANCHCHCHSINSLCNASHCASKJN: ", changingFilter)
  if (changingFilter) {
    return (
      <Grid container spacing={16} direction="row" justify="center" alignItems="right">
        <Grid>
          <Link from="/filter" to="/search"><Button variant="contained" color="primary">FILTRA!</Button></Link>
        </Grid>
      </Grid>
    )
  }
  return (
    <Grid container spacing={16} direction="row" justify="center" alignItems="right">
      <Grid>
        <Link from="/where" to="/confirm"><Button variant="contained" color="primary">Continue</Button></Link>
      </Grid>
    </Grid>
  )
}

function stepTwo(props) {
  const { classes, user, onChangeUntilFn } = props;

  if (!user.dateFrom) {
    return null
  }

  return (
    <Grid item>
      <form className={classes.container} noValidate>
        <TextField
          id="date"
          label="Until"
          type="date"
          error={props.inputErrorUntil}
          helperText={props.inputErrorUntilHelper}
          // defaultValue={formatDate(props.defaultUntil)}  //CHANGED FOR TEST
          defaultValue={formatDate(props.user.dateTo)}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => onChangeUntilFn(e)}
        />
      </form>
    </Grid>
  )
}

function RegisterWhen(props) {
  const { classes, onChangeFromFn } = props;

  let title = []
  if (props.user.type === 'traveller') {
    title[0] = "When are you around?"
  } else {
    title[0] = "When are you available?"
  }

  return (
    <Grid container spacing={16} direction="column" justify="center" alignItems="center">
      <Grid item>
        <Typography variant="headline" component="h2">{title}</Typography>
      </Grid>
      <Grid item>
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            label="From"
            type="date"
            error={props.inputErrorFrom}
            helperText={props.inputErrorFromHelper}
            defaultValue={formatDate(props.user.dateFrom)}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => onChangeFromFn(e)}
          />
        </form>
      </Grid>
      {stepTwo(props)}
      {stepThree(props)}
    </Grid>
  )
}

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

export default withStyles(styles)(RegisterWhen)