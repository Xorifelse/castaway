import * as React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

function RegisterWhere(props) {
    return <div>Where are you living?
        <div>
            {props.cities.map(location => <button key={location} onClick={() => props.setLocation(location)}>{location}</button>)}
            <br /><br />
            <button> <Link to={'/when'}>NEXT</Link></button>
        </div>
    </div>
}

const styles = {
  
}

export default withStyles(styles)(RegisterWhere)