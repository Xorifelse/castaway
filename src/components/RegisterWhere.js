import * as React from 'react'
import {Link} from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import Button         from '@material-ui/core/Button'
import Switch         from '@material-ui/core/Switch'
import Grid           from '@material-ui/core/Grid'
import Typography     from '@material-ui/core/Typography'
import TextField      from '@material-ui/core/TextField'
import breadcrumbs_state02 from '../img/breadcrumbs_state02.png'


const displayBreadCrumbsAndGreetings = (props) => {
  if (props.userProfile) {
    return
  }
  return (
    <Grid item>
      {/* next button */}
      <Button variant='outlined' color="primary" disabled={(props.userObj.location !== '') ? false : true}><Link to={'/when'}>NEXT</Link></Button>
    </Grid>
  )
}

// const breadcrumbs_state01 = require('../lib/graphics/breadcrumbs-allstates/breadcrumbs_state01.png')


function RegisterWhere(props) {

  const { classes } = props

  return (
    <Grid container spacing={16} direction="column" justify="flex-start" alignItems="center" className={classes.content}>
      <Grid item className={classes.topBarBreadcrumbs}>
        <img src={breadcrumbs_state02} width="80px" alt=""/>
      </Grid>
      <Grid item className={classes.topBar}>
        <Typography className={classes.txtSmall}>
          {(props.userObj.type === 'local') && "Awesome. You're a Local?"}
          {(props.userObj.type === 'traveller') && "Awesome. You're a Traveller?"} 
        </Typography>
        <Typography variant="headline" component="h2" className={classes.txtBig}>
          {(props.userObj.type === 'local') && "Where do you live?"}
          {(props.userObj.type === 'traveller') && "Where are you headed?"}  
        </Typography>
      </Grid>
      <Grid item >
        {/* CITY BUTTONS */}
      
        <Grid container spacing={16} direction="column" justify="center" alignItems="center">
          <Grid item>
            <Typography>fill in your location or choose one from below</Typography>
          </Grid>

          <Grid item>
            {/* input */}
            <TextField id="city" value={props.inputValue} onChange={(event) => props.inputChangeFn(event)} />
          </Grid>
          <Grid item>
            <Grid container spacing={16} direction="row" justify="center" alignItems="center">
              {/* map over cities with grid items */}
              {props.cities.map(location => <Grid item key={location}><Button onClick={() => props.setLocationFn(location)} variant={props.buttonContainedFn(location)} color="secondary" >{location}</Button></Grid>)}
            </Grid>
          </Grid>
          <Grid item className={classes.griditemNextBtn}>
            {/* next button */}
            <Button variant='text' color="secondary" disabled={(props.userObj.location !== '') ? false : true}>
              <Link to={'/when'}>NEXT</Link>
            </Button>
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
      {displayBreadCrumbsAndGreetings(props)}
    </Grid>
    

  )
}

const styles = {
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
  content: {
    background: '#EBF0FF',
    height: '100vh',
  },
  name: {
    marginTop: 40,
    marginLeft: 40,
    position: 'relative',
     left: -30
  },
  type: {
    marginTop: 20,
    marginLeft: 40
  },
  griditemNextBtn: {
    marginTop: 20,
    marginLeft: 250
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
  // colorSwitchBase: {
  //   color: 'primary',
  //   '&$colorChecked': {
  //     color: 'primary',
  //     '& + $colorBar': {
  //       backgroundColor: 'primary',
  //     },
  //   },
  // }
}

export default withStyles(styles)(RegisterWhere)