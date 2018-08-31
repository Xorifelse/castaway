import * as React from 'react'


import { withStyles } from '@material-ui/core/styles'
import Grid           from '@material-ui/core/Grid'
import Typography     from '@material-ui/core/Typography'
import loadingImg from '../img/castaway_loader.gif'
import breadcrumbs_state02 from '../img/breadcrumbs_state02.png'

// const breadcrumbs_state01 = require('../lib/graphics/breadcrumbs-allstates/breadcrumbs_state01.png')


function RegisterWhereLoading(props) {

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
        {/* loading */}
        {/* <div style={{margin: 'auto', width: '30%', paddingTop: '50%'}}> */}
          <img src={loadingImg} style={{margin: 'auto'}} alt="" />
        {/* </div> */}
        
      </Grid>
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

export default withStyles(styles)(RegisterWhereLoading)