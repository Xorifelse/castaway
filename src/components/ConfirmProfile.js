import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

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
  console.log(props.userObj)
  return (
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
          
          
          {/* 
           */}
    </Grid>
  )
}

const styles ={
};

export default withStyles(styles)(ConfirmProfile)