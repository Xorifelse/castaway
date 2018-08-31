import * as React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid           from '@material-ui/core/Grid'
import Typography     from '@material-ui/core/Typography'

import breadcrumbs_state  from '../img/breadcrumbs_state04.png'
import loadingImg from '../img/castaway_loader.gif'

function SearchMatches(props) {
  const {classes} = props 
  return (
    <Grid container spacing={16} direction="column" justify="flex-start" alignItems="flex-start" className={classes.content}>
      <Grid item className={classes.topBarBreadcrumbs}>
        <Grid item className={classes.topBarBreadcrumbsPNG}><img src={breadcrumbs_state} width="80px" alt="" /></Grid>
      </Grid>
      <Grid item className={classes.topBar}>
        <Typography className={classes.txtSmall}>
          We've created your profile!
          </Typography>
        <Typography variant="headline" component="h2" className={classes.txtBig}>
          {props.message}
          </Typography>
      </Grid>
      <Grid item>
        <div style={{margin: 'auto', width: '30%', paddingTop: '50%'}}>
          <img src={loadingImg} style={{margin: 'auto'}} alt="" />
        </div>
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
    color: 'white',
  },
  txtBig: {
    color: 'white',
  },
}

export default withStyles(styles)(SearchMatches)