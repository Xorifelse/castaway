import * as React from 'react'
import propTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';


function stepTwo(props){
  console.log(props.dateFrom)
}

function RegisterDatePicker(props) {
  const { classes, onChangeFromFn, onChangeUntilFn } = props;

  console.log(props)

  return (
    <Grid container spacing={16} direction="column" justify="center" alignItems="center">
      <Grid item>
        <Typography variant="headline" component="h2">When are you traveling</Typography>
      </Grid>
      <Grid item>
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            label="From"
            type="date"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => onChangeFromFn(e, props)}
          />
        </form>
      </Grid>
      <Grid item>
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            label="Until"
            type="date"
            defaultValue={props.defaultValue}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => onChangeUntilFn(e)}
          />
        </form>
      </Grid>
    </Grid>

  )
}

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

export default withStyles(styles)(RegisterDatePicker)