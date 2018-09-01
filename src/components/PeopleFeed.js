import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button         from '@material-ui/core/Button'
import feedbgimage from '../img/Feed_Background_Amend5.png'
import filterbutton from '../img/Filter_Button.png'
import accountbutton from '../img/Account_Button.png'
import country_NL from '../img/flag_nl.png'
import country_UK from '../img/flag_uk.png'
import country_FR from '../img/flag_fr.png'
import country_JP from '../img/flag_jp.png'
import country_US from '../img/flag_us.png'
import country_BO from '../img/flag_bl.png'
import country_unknown from '../img/flag_unknown.png'
import {Link}      from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid           from '@material-ui/core/Grid'
import denyBtn from '../img/Deny_Button.png'
import acceptBtn from '../img/Accept_Button.png'

function PeopleFeed(props) {
  const { classes } = props
  let country_flag = null
    if (props.person.nationality === 'N/A') {
      country_flag = country_unknown
    } 
    if (props.person.nationality === 'NL') {
      country_flag = country_NL
    }
    if (props.person.nationality === 'FR') {
      country_flag = country_FR
    }
    if (props.person.nationality === 'UK') {
      country_flag = country_UK
    }
    if (props.person.nationality === 'US') {
      country_flag = country_US
    }
    if (props.person.nationality === 'JP') {
      country_flag = country_JP
    }
    if (props.person.nationality === 'BO') {
      country_flag = country_BO
    }
  
  // const bull = <span className={classes.bullet}>•</span>
  return (
    // <div style={{backgroundImage: `url(${feedbgimage})`, minHeight: '100vh', minWidth: '100vw', position: 'absolute', top: 0}>
    <Grid container spacing={16} direction="column" justify="flex-start" alignItems="center" className={classes.content} style={{backgroundImage: `url(${feedbgimage})`, minHeight: '100vh', minWidth: '100vw', position: 'absolute', top: 0}}>
      <Grid item>
        {/* CARD */}
        
        <Card className={classes.personCard}>
          <CardMedia
            className={classes.profileImage}
            image={props.person.avatar}
            title={props.person.name}
            style={{position: 'relative'}}
          >
            <Typography gutterBottom variant="title" style={{position: 'absolute', bottom: 10, left: 20, color: 'rgba(255, 255, 255, 0.90)'}}>
                {props.person.name}
              </Typography>
            <img src={country_flag} alt="" style={{position: 'absolute', bottom: 15, right: 20, width: 40}} />

          </CardMedia>
          <CardContent>
            <Typography className={classes.pos} color="textSecondary">
              Likes: {props.person.hobbies.map(hobby => hobby+ ' ')}
            </Typography>
          </CardContent>
          <CardActions >
            <Button size="small" color="secondary" style={{position: 'absolute', right: 10, bottom: 5}}>
              view profile
            </Button>
          </CardActions>
        </Card>
        {/* CARD */}
      </Grid>
      {/* <div><h1>{props.person.name}</h1></div> */}
      {/* <div><img src={props.person.avatar} width="100%"/></div> */}
      <Grid item>
        <Grid container spacing={16} direction="row" justify="center" alignItems="center" style={{position: 'relative', top: 8}}>
          <Grid item>
            <img src={denyBtn} onClick={props.dislikeFn} variant="contained" color="secondary" alt=""/>
          </Grid>
          <Grid item style={{width: 50}}></Grid>
          <Grid item>
            <img src={acceptBtn} onClick={props.likeFn} variant="contained" color="primary" alt=""/>
          </Grid>
        </Grid>
        {/* // */}
      </Grid>
      <Grid item style={{position: 'absolute', bottom: 30}}>
        <Grid container spacing={16} direction="row" justify="center" alignItems="center" style={{position: 'relative', top: 8}}>
          <Grid item>
            <Link to="/profile"><img src={accountbutton} alt="" width={30}/></Link>
          </Grid>
          <Grid item style={{width: 170}}></Grid>
          <Grid item>
            <Link to="/filter"><img src={filterbutton} alt=""/></Link>
          </Grid>
        </Grid>
      </Grid>  
    </Grid>
  )
}

const styles = {
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
  title: {
    marginBottom: 16,
    fontSize: 18,
  },
  personCard: {
    marginTop: 30,
    maxWidth: 320,
    position: 'relative',
    background: '#EBF0FF'
  },
  profileImage: {
    height: 270,
    width: 320
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 24,
  }
}

export default withStyles(styles)(PeopleFeed)