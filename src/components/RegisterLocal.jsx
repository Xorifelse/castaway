import * as React from 'react'
import { Link } from 'react-router-dom'

export default function RegisterLocal(props) {
    return <div>Where are you living?
        <div>
            {props.cities.map(location => <button key={location} onClick={() => props.setLocation(location)}>{location}</button>)}
            <br /><br />
            <button> <Link to={'/chooseDates'}>NEXT</Link></button>
        </div>
    </div>
}