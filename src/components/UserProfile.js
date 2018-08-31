import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'


function UserProfile(props) {
  const { classes } = props
  return (
    <Grid container spacing={16} direction="column" justify="flex-start" alignItems="center" className={classes.content} >
      <Grid item>
        <Card className={classes.personCard}>
          <CardMedia
            className={classes.profileImage}
            image={props.avatar}
            title={props.name}
            style={{ position: 'relative' }}
            >
          </CardMedia>
        </Card>
      </Grid>
      <Grid item>
        <Grid container spacing={16} direction="row" justify="center" alignItems="center">
          <Grid item>
          <Typography>change image </Typography>
          </Grid>
          <Grid item><input type="file" accept="image/*" onChange={(event) => props.imgUploadFn(event.target.files[0])}/></Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

const styles = {
  content: {
    background: '#EBF0FF',
    height: '100vh',
  },
  personCard: {
    marginTop: 30,
    maxWidth: 320,
    position: 'relative',
  },
  profileImage: {
    height: 270,
    width: 320
  }
}


export default withStyles(styles)(UserProfile)