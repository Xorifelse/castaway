import * as React from 'react'
import propTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

import {Link} from 'react-router-dom'


function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

function stepThree(props){
  const { classes, user} = props

  if (!user.dateFrom || !user.dateTo){
    return null
  }

  return (
    <Grid container spacing={16} direction="row" justify="center" alignItems="right">
      <Grid><Link to="/feed"><Button variant="contained" color="primary">Continue</Button></Link></Grid>
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
          defaultValue={formatDate(props.defaultUntil)}
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

function RegisterDatePicker(props) {
  const { classes, onChangeFromFn } = props;

  return (
    <Grid container spacing={16} direction="column" justify="center" alignItems="center">
      <Grid item>
        <Typography variant="headline" component="h2">When are you traveling</Typography>
      </Grid>
      <Grid item>
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            label="From"
            type="date"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => props.onChangeFromFn(e)}
          />
        </form>
      </Grid>
      {stepTwo(props)}
      {stepThree(props)}

      {/* next button */}
      <Button variant='outlined' color="primary"><Link to={'/search'}>NEXT</Link></Button>

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

export default withStyles(styles)(RegisterDatePicker)