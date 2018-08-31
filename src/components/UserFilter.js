import * as React from 'react'
import FilterWhenContainer from './FilterWhenContainer'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


function UserFilter(props) {
  return (
    <Grid container spacing={16} direction="column" justify="center" alignItems="center">
      <Grid item>
        <Typography variant="headline" component="h2">
          Change your preferences!
        </Typography>
        <Grid container spacing={16} direction="column" justify="center" alignItems="center">
          <Grid item>
            <Typography variant="headline" component="h2">
              Looking for a...
          </Typography>
          </Grid>
          <Grid item>
            {props.lookingFor.map(lookingFor => <Button key={lookingFor} onClick={() => props.setLookingForFn(lookingFor)}
              variant={props.buttonLookingForContainedFn(lookingFor)} color="primary">{lookingFor}</Button>)}
          </Grid>
        </Grid>
        <Grid container spacing={16} direction="row" justify="center" alignItems="center">
          <Grid item>
            <Typography variant="headline" component="h2">
              Which city...
          </Typography>
          </Grid>
          <Grid item>
            {props.cities.map(location => <Button key={location} onClick={() => props.setLocationFn(location)}
              variant={props.buttonLocationContainedFn(location)} color="primary">{location}</Button>)}
          </Grid>
        </Grid>
        {/* {props.group.map(groupType => <Button key={groupType} onClick={() => props.setGroupFn(groupType)}
        variant={props.buttonContainedFn(groupType)} color="primary">{groupType}</Button>)} */}

        {/* {props.hobbies.map(hobbie => <Button key={hobbie} onClick={() => props.setHobbiesFn(hobbie)}
        variant={props.buttonContainedFn(hobbie)} color="primary">{hobbie}</Button>)} */}

        {/* <Link to="/feed">Back To Feed</Link> */}
        <Grid container spacing={16} direction="row" justify="center" alignItems="center">
          <Grid item><FilterWhenContainer /></Grid>
        </Grid>
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
};

export default withStyles(styles)(UserFilter)