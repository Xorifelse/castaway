import * as React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

import breadcrumbs_state from '../img/breadcrumbs_state03.png'

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
  const { user } = props

  if (!user.dateFrom || !user.dateTo) {
    return null
  }

  return (
    <Grid container spacing={16} direction="row" justify="center" alignItems="flex-end">
      <Grid>
        <Link to="/confirm"><Button variant="contained" color="primary">Continue</Button></Link>
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
          defaultValue={formatDate(props.user.dateTo)}//CHANGED FOR TEST
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
    <Grid container spacing={16} direction="column" justify="flex-start" alignItems="flex-start" className={classes.content}>
      <Grid item className={classes.topBarBreadcrumbs}>
        <Grid item className={classes.topBarBreadcrumbsPNG}><img src={breadcrumbs_state} width="80px" alt=""/></Grid>
      </Grid>
      <Grid item className={classes.topBar}>
        <Typography variant="headline" component="h2" className={classes.txtBig}>
          {title}
        </Typography>
      </Grid>
      <Grid item className={classes.name}>
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
      <Grid item className={classes.name}>
        {stepTwo(props)}
      </Grid>
      <Grid item className={classes.name}>
        {stepThree(props)}
      </Grid>
    </Grid>
  )
}

const styles = theme => ({
  topBar: {
    background: '#BE8D8A',
    textAlign: "center",
    width: '100%',
    height: '70px',
  },
  topBarBreadcrumbs: {
    background: '#EBF0FF',
    textAlign: "center",
    width: '100%',
    height: '30px'
  },
  topBarBreadcrumbsPNG: {
    marginTop: 2,
  },
  txtSmall: {
    color: 'white',
  },
  txtBig: {
    color: 'white',
  },
  textField: {
    width: 250
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
  content: {
    background: '#EBF0FF',
    height: '100vh',
  },
  name: {
    marginTop: 40,
    marginLeft: 40
  },
  type: {
    marginTop: 20,
    marginLeft: 40
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
    fontSize: 18,
  },
  pos: {
    // marginBottom: 24,
  },
  header: {
    marginTop: 16,
    marginBottom: 16,
    fontSize: 48
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

export default withStyles(styles)(RegisterWhen)