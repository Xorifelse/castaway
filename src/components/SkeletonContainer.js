import * as React from 'react'
import {connect} from 'react-redux'

import Skeleton from './Skeleton'

import {skeletonAction} from '../actions/skeletonAction'

class SkeletonContainer extends React.PureComponent {
  state = {}

  componentDidMount(){
    this.props.skeletonAction('Simple skeleton webpage')
  }

  render() {
    return <Skeleton data={this.props.data.skeleton.name} />
  }
}

const mapStateToProps = (data) => ({data})

export default connect(mapStateToProps, {skeletonAction})(SkeletonContainer)