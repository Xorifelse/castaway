import * as React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

export default function RegisterLocal(props) {
   return (
    <Grid container spacing={16} direction="column" justify="center" alignItems="center">
        <Grid item>
            <Typography>
                Awesome. You're a Local 
            </Typography>
            <Typography variant="headline" component="h2">
                Where are you living?
            </Typography>
        </Grid>
        <Grid item>
            <Grid container spacing={16} direction="row" justify="center" alignItems="center">
            {/* map over cities with grid items */}
            {props.cities.map(location => <Button key={location} onClick={() => props.setLocationFn(location)} variant={props.buttonContainedFn(location)} color="primary">{location}</Button>)}
            </Grid>
        </Grid>
        <Grid item>
            {/* next button */}
            <Button variant='outlined' color="primary"><Link to={'/when'}>NEXT</Link></Button>
        </Grid>
    </Grid>
   )
}