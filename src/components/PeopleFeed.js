import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button         from '@material-ui/core/Button'
import feedbgimage from '../img/Feed_Background.png'
import {Link}      from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid           from '@material-ui/core/Grid'

function PeopleFeed(props) {
  const { classes } = props
  return (
    // <div style={{backgroundImage: `url(${feedbgimage})`, minHeight: '100vh', minWidth: '100vw', position: 'absolute', top: 0}>
    <Grid container spacing={16} direction="column" justify="top" alignItems="center" className={classes.content} style={{backgroundImage: `url(${feedbgimage})`, minHeight: '100vh', minWidth: '100vw', position: 'absolute', top: 0}}>
      <Grid item>
        <Card className={classes.personCard}>
          <CardMedia
            className={classes.profileImage}
            image={props.person.avatar}
            title={props.person.name}
            style={{position: 'relative'}}
          >
          <Typography gutterBottom variant="title" style={{position: 'absolute', bottom: 10, left: 20, color: 'white'}}>
              {props.person.name}
            </Typography>
          </CardMedia>
          <CardContent>
            <Typography component="p">
              infot text infot text info textinfot text infot text info textinfot text infot text info text
            </Typography>
          </CardContent>
          <CardActions >
            <Button size="small" color="secondary" style={{position: 'absolute', right: 10, bottom: 5}}>
              view profile
            </Button>
          </CardActions>
        </Card>
      </Grid>
      {/* <div><h1>{props.person.name}</h1></div> */}
      {/* <div><img src={props.person.avatar} width="100%"/></div> */}

      <Button onClick={props.dislikeFn} variant="contained" color="secondary">dislike</Button>
      <Button onClick={props.likeFn} variant="contained" color="primary">like</Button>
      <Link to="/profile"><Button variant="contained" color="primary">Profile</Button></Link>
          <Link to="/filter"><Button variant="contained" color="primary">Filter</Button></Link>
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
  },
  profileImage: {
    height: 270,
    width: 320
  },
  pos: {
    // marginBottom: 24,
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

export default withStyles(styles)(PeopleFeed)