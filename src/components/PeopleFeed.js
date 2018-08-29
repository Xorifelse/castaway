import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button         from '@material-ui/core/Button'

function PeopleFeed(props) {

  return (
    <div>
      <div><h1>{props.person.name}</h1></div>
      <div><img src={props.person.avatar} width="100%"/></div>

      <Button onClick={props.dislikeFn}>dislike</Button>
      <Button onClick={props.likeFn}>like</Button>
    </div>

  )
}

const styles ={
};

export default withStyles(styles)(PeopleFeed)