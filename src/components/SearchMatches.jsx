import * as React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid           from '@material-ui/core/Grid'
import Typography     from '@material-ui/core/Typography'
import {Link}         from 'react-router-dom'
import Button         from '@material-ui/core/Button'

import breadcrumbs_state  from '../img/breadcrumbs_state04.png'
import loadingImg from '../img/castaway_loader.gif'

function imageOrButton(isLoading){
  return isLoading ? (
    <div style={{margin: 'auto', width: '30%', paddingTop: '50%'}}>
      <img src={loadingImg} style={{margin: 'auto'}} alt="" />
    </div>
  ) : (
    <div style={{margin: 'auto', paddingTop: '50%'}}>
      <div style={{marginLeft: '20vh'}}>
        <Link to="/profile"><Button variant="contained" color="primary">Profile</Button></Link>
      </div>
      <div style={{marginLeft: '21vh', marginTop: '20px'}}>
        <Link to="/filter"><Button variant="contained" color="primary">Filter</Button></Link>
      </div>
    </div>
  )
}

function SearchMatches(props) {
  const {classes} = props 
  return (
    <Grid container spacing={16} direction="column" justify="flex-start" alignItems="flex-start" className={classes.content}>
      <Grid item className={classes.topBar}>
        <Typography className={classes.txtSmall}>
          {props.topMessage}
          </Typography>
        <Typography variant="headline" component="h2" className={classes.txtBig}>
          {props.message}
          </Typography>
      </Grid>
      <Grid item>
        {imageOrButton(props.loading)}
      </Grid>
    </Grid>
  )
}

const styles = {
  content: {
    background: '#EBF0FF',
    height: '100vh',
  },
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
    paddingTop: '5px',
    color: 'white',
  },
  txtBig: {
    color: 'white',
  },
  centerbuttons: {

  }
}

export default withStyles(styles)(SearchMatches)