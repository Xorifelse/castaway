import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import breadcrumbs_state from '../img/breadcrumbs_state04.png'

function getFormattedDate(dateStamp) {
  const date = new Date(dateStamp)
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  
  return month + '/' + day + '/' + year;
}




function ConfirmProfile(props) {
  const { classes } = props;

  return (
    <Grid container spacing={16} direction="column" alignItems="left" className={classes.content}>
      <Grid item className={classes.topBarBreadcrumbs}>
        <Grid item className={classes.topBarBreadcrumbsPNG}><img src={breadcrumbs_state} width="80px" /></Grid>
      </Grid>
    </Grid>
  )
}

/*
    <Grid container spacing={16} direction="column" justify="center" alignItems="center">
      <Grid item>
        <Typography variant="headline" component="h2">This is you. Happy?</Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={16} direction="row" justify="center" alignItems="center">
          <Grid item><Typography>your name is </Typography></Grid><Grid item><Typography>{props.userObj.name}</Typography></Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={16} direction="row" justify="center" alignItems="center">
          <Grid item><Typography>you are a </Typography></Grid><Grid item><Typography>{props.userObj.type}</Typography></Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={16} direction="row" justify="center" alignItems="center">
          <Grid item><Typography>looking for a </Typography></Grid><Grid item><Typography>{props.userObj.lookingFor}</Typography></Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={16} direction="row" justify="center" alignItems="center">
          <Grid item><Typography>in </Typography></Grid><Grid item><Typography>{props.userObj.location}</Typography></Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={16} direction="row" justify="center" alignItems="center">
          <Grid item><Typography>between </Typography></Grid><Grid item><Typography>{getFormattedDate(props.userObj.dateFrom)}</Typography></Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={16} direction="row" justify="center" alignItems="center">
          <Grid item><Typography>and </Typography></Grid><Grid item><Typography>{getFormattedDate(props.userObj.dateTo)}</Typography></Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={16} direction="row" justify="center" alignItems="center">
          <Grid item><Typography>pick a image </Typography></Grid><Grid item><input type="file" accept="image/*" onChange={(event) => props.imgUploadFn(event.target.files[0])}/></Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={16} direction="row" justify="center" alignItems="center">
          <Grid item><Button variant='outlined' color="primary" onClick={() => props.dbAddFn(props.userObj)}>SUBSCRIBE</Button></Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={16} direction="row" justify="center" alignItems="center">
          <Grid item><Button variant='outlined' color="primary" disabled={(props.userObj.avatar) ? false : true} ><Link to="/search">FEED ME!</Link></Button></Grid>
          {/* onClick={() => props.dbAddFn(props.userObj)}  ==== REMOVED FOR TESTING   *\/}
          </Grid>
          </Grid>
        </Grid>
*/

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
  colorSwitchBase: {
    color: 'primary',
    '&$colorChecked': {
      color: 'primary',
      '& + $colorBar': {
        backgroundColor: 'primary',
      },
    },
  },
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

export default withStyles(styles)(ConfirmProfile)