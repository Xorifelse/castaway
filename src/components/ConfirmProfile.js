import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import breadcrumbs_state from '../img/breadcrumbs_state04.png'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import uploadImg from '../img/addphoto.png'

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

  const { classes } = props

  return (
    <Grid container spacing={16} direction="column" justify="flex-start" alignItems="center" className={classes.content} >
      <Grid item className={classes.topBarBreadcrumbs}>
        <Grid item className={classes.topBarBreadcrumbsPNG}><img src={breadcrumbs_state} width="80px" alt=""/></Grid>
      </Grid>
      <Grid item>
        {/* CARD */}
        
        <Card className={classes.personCard}>
          <CardMedia
            className={classes.profileImage}
            style={{position: 'relative'}}
            image={props.userObj.avatar || uploadImg}
          >
            <Typography gutterBottom variant="title" style={{position: 'absolute', top: 0, right: 0, left: 0, color: 'rgba(255, 255, 255, 0.90)', background: 'rgba(23, 41, 55, 1)', textAlign: 'center', fontSize: 17}}>
                Welcome to your Profile!
            </Typography>
            <input type="file" accept="image/*" style={{backgroundColor: `rgba(0,0,0,0)`, height: '42vh', width: '100vh'}} onChange={(event) => props.imgUploadFn(event.target.files[0])}/>

          </CardMedia>
          <CardContent>
            <Typography className={classes.pos} color="textSecondary">
              <div><strong>{props.userObj.name}</strong> is a <strong>{props.userObj.type}</strong></div>
              <div>in <strong>{props.userObj.location}</strong> looking for <strong>{props.userObj.lookingFor}</strong></div>
              <div>between</div>
              <div><strong>{getFormattedDate(props.userObj.dateFrom)}</strong> and <strong>{getFormattedDate(props.userObj.dateTo)}</strong></div>
            </Typography>
          </CardContent>
        </Card>
        {/* CARD */}
      </Grid>
      <Grid>
        <Button disabled={(props.userObj.avatar) ? false : true} size="small" color="secondary" style={{position: 'absolute', left: '40%'}} onClick={() => props.dbAddFn(props.userObj)} >
          <Link to="/search">confirm</Link>
        </Button>
      </Grid>
    </Grid>

  )
}

const styles ={
  content: {
    background: '#EBF0FF',
    height: '100vh',
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
  pos: {
    textAlign: 'center',
    marginBottom: 24,
  }
};

export default withStyles(styles)(ConfirmProfile)