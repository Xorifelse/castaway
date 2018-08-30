import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button         from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

function UserFilter(props) {
  return (
    <div>
      <div>Hi from UserFilter</div>
      {console.log("location: "+props.cities)}
      {console.log("Look: "+props.lookingFor)}
      {props.lookingFor.map(lookingFor => <Button key={lookingFor} onClick={() => props.setLookingForFn(lookingFor)}
        variant={props.buttonContainedFn(lookingFor)} color="primary">{lookingFor}</Button>)}
      {props.cities.map(location => <Button key={location} onClick={() => props.setLocationFn(location)}
        variant={props.buttonContainedFn(location)} color="primary">{location}</Button>)}

      {/* {props.group.map(groupType => <Button key={groupType} onClick={() => props.setGroupFn(groupType)}
        variant={props.buttonContainedFn(groupType)} color="primary">{groupType}</Button>)} */}

        {/* {props.hobbies.map(hobbie => <Button key={hobbie} onClick={() => props.setHobbiesFn(hobbie)}
        variant={props.buttonContainedFn(hobbie)} color="primary">{hobbie}</Button>)} */}
        
      {/* <Link to="/feed">Back To Feed</Link> */}
      <Link to="/search">Back To Feed</Link>
    </div>
  )
}

/* 
lookingFor(pin): "traveller"
location(pin): ""
group(pin): null
dateFrom(pin): ""
dateTo(pin): ""
hobbies(pin):
*/

const styles = {
};

export default withStyles(styles)(UserFilter)