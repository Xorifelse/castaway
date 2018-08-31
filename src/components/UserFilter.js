import * as React from 'react'
import FilterWhenContainer from './FilterWhenContainer'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

import feedbgimage from '../img/Feed_Background_Amend5.png'

function UserFilter(props) {
  const { classes } = props

  return (
    <Grid container spacing={16} direction="column" justify="flex-start" alignItems="center" className={classes.content} >
      <Typography gutterBottom variant="title" style={{position: 'absolute',color: 'rgba(255, 255, 255, 0.90)', background: 'rgba(23, 41, 55, 1)', textAlign: 'center', fontSize: 20, width: '100vh', marginTop: 10}}>
        Change your preferences!
      </Typography>
      <Grid item>

        <Card className={classes.personCard}>
          <CardMedia
            className={classes.profileImage}
            style={{position: 'relative', width: '100vh', backgroundColor: 'rgba(0,0,0,0)'}}>
          </CardMedia>
          <CardContent>
            <Typography variant="headline" component="h2">
              Looking for a...
            </Typography>
            <Grid item>
            {props.lookingFor.map(lookingFor => <Button key={lookingFor} onClick={() => props.setLookingForFn(lookingFor)}
              variant={props.buttonLookingForContainedFn(lookingFor)} color="secondary">{lookingFor}</Button>)}
          </Grid>
          </CardContent>
        </Card>
        <Card className={classes.personCard}>
          <CardMedia
            className={classes.profileImage}
            style={{position: 'relative', width: '100vh', backgroundColor: 'rgba(0,0,0,0)'}}>
          </CardMedia>
          <CardContent>
            <Typography variant="headline" component="h2">
              Which city...
            </Typography>
            <Grid item>
            {props.cities.map(location => <Button key={location} onClick={() => props.setLocationFn(location)}
              variant={props.buttonLocationContainedFn(location)} color="secondary">{location}</Button>)}
          </Grid>
          </CardContent>
        </Card>
        <Card className={classes.personCard}>
          <CardMedia
            className={classes.profileImage}
            style={{position: 'relative', width: '100vh', backgroundColor: 'rgba(0,0,0,0)'}}>
          </CardMedia>
          <CardContent>
            <Typography variant="headline" component="h2">
              Change the time
            </Typography>
            <Grid item><FilterWhenContainer /></Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

/* FILTERS TO ADD:
lookingFor(pin): "traveller"  --> added
location(pin): ""             --> added
group(pin): null
dateFrom(pin): ""             --> added
dateTo(pin): ""               --> added
hobbies(pin):
*/

const styles = {
  content: {
    background: '#EBF0FF',
    height: '100vh',
  },
  personCard: {
    marginTop: 30,
    maxWidth: 320,
    position: 'relative',
    background: '#EBF0FF'
  },
  profileImage: {
    width: 320
  },
  pos: {
    textAlign: 'center',
    marginBottom: 24,
  }
};

export default withStyles(styles)(UserFilter)