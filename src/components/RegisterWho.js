import * as React from 'react'
import {Link} from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import Button         from '@material-ui/core/Button'
import Switch         from '@material-ui/core/Switch'
import Grid           from '@material-ui/core/Grid'
import Typography     from '@material-ui/core/Typography'
import TextField      from '@material-ui/core/TextField'
import breadcrumbs_state01 from '../img/breadcrumbs_state01.png'

// const breadcrumbs_state01 = require('../lib/graphics/breadcrumbs-allstates/breadcrumbs_state01.png')


const displayLookingFor = (props) => {
  const { classes } = props
  return (
    <Grid item className={classes.type}>
    <Typography variant="title">
      Looking for a...
    </Typography>
    <Grid container spacing={16} direction="row" justify="center" alignItems="center">
      <Grid item style={{position: 'relative', left: -30}}>
        <Typography 
          style={{display: 'inline-block'}} 
          color={(props.userObj.lookingFor === 'traveller') ? 'secondary' : ''}
          >Traveller</Typography>
          <Switch 
            value="traveller" 
            checked={props.userLookingForBool} onChange={(event) => props.userLookingForChangeFn(event)} 
            />
          <Typography 
            style={{display: 'inline-block'}}
            color={(props.userObj.lookingFor === 'local') ? 'secondary' : ''}
            >
            Local</Typography>
      </Grid>
    </Grid>
  </Grid>
  //   <Grid item>
  //   <Typography variant="headline" component="h2">
  //     Looking for a... 
  //   </Typography>
  //   <Grid container spacing={16} direction="row" justify="center" alignItems="center">
  //     <Grid item><Button onClick={() => props.setLookingForBtn('traveller')} variant={props.btnLookingTrav} color="secondary">Traveller</Button></Grid>
  //     <Grid item><Button onClick={() => props.setLookingForBtn('local')} variant={props.btnLookingLoc} color="secondary">Local</Button></Grid>
  //   </Grid>
  // </Grid>
  )
}

const displayGroup = (props) => {
  return (
    <Grid item>
    <Typography variant="headline" component="h2">
      Are you alone or in a group/ couple? 
    </Typography>
    <Grid container spacing={16} direction="row" justify="center" alignItems="center">
      <Grid item><Button onClick={() => props.setGroupBtn(false)} variant={props.btnGroupFalse} color="secondary">Alone</Button></Grid>
      <Grid item><Button onClick={() => props.setGroupBtn(true)} variant={props.btnGroupTrue} color="secondary">Group/ couple</Button></Grid>
    </Grid>
  </Grid>
  )
}



function RegisterWho(props) {

  const { classes } = props
  return (
    <Grid container spacing={16} direction="column" justify="top" alignItems="left" className={classes.content}>
      <Grid item className={classes.topBarBreadcrumbs}>
        <Grid item className={classes.topBarBreadcrumbsPNG}><img src={breadcrumbs_state01} width="80px"/></Grid>
      </Grid>
      <Grid item className={classes.topBar}>
      <Typography className={classes.txtSmall}>
          Hi! I don't think we've met yet. 
        </Typography>
      <Typography variant="headline" component="h2" className={classes.txtBig}>
          Tell me a bit about you  
        </Typography>
      </Grid>
      <Grid item className={classes.name}>
      
        {/* <Grid container spacing={16} direction="row" justify="left" alignItems="left"> */}
          {/* <Grid item> */}
            <Typography variant="title">Hi, my name is...</Typography>
            {/* input */}
            <TextField id="name" value={props.inputValue} onChange={(event) => props.inputChangeFn(event)} className={classes.textField} />
          {/* </Grid> */}
        {/* </Grid> */}
      </Grid>
      <Grid item className={classes.type}>
        <Typography variant="title">
          and I'm a...
        </Typography>
        <Grid container spacing={16} direction="row" justify="center" alignItems="center">
          <Grid item style={{position: 'relative', left: -30}}>
            <Typography 
              style={{display: 'inline-block'}} 
              color={(props.userObj.type === 'traveller') ? 'secondary' : ''}
              >Traveller</Typography>
              <Switch 
                value="traveller" 
                checked={props.userTypeBool} onChange={(event) => props.userTypeChangeFn(event)} 
                />
              <Typography 
                style={{display: 'inline-block'}}
                color={(props.userObj.type === 'local') ? 'secondary' : ''}
                >
                Local</Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* only display below if user.type is set */}
      {(props.userObj.type !== '' && props.userObj.type !== 'local') && displayLookingFor(props)}
      {/* {(props.userObj.lookingFor !== '' || props.userObj.type === 'local') && displayGroup(props)} */}
      <Grid item className={classes.griditemNextBtn}>
      <Button disabled={(props.userObj.name !== '' && props.userObj.type !== '' && props.userObj.lookingFor !== '' ) ? false : true} variant='text' color="secondary"><Link to="/where">Next</Link></Button>
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
    marginLeft: 40
  },
  type: {
    marginTop: 20,
    marginLeft: 40
  },
  griditemNextBtn: {
    marginTop: 20,
    marginLeft: 300
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
  }
}

export default withStyles(styles)(RegisterWho)