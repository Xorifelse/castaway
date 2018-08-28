import * as React from 'react'
import { connect } from 'react-redux'
import { allthepeople } from '../lib/People'
import RegisterLocal from './RegisterLocal'
import { setLocation } from '../actions/user'


const a = (allthepeople) => allthepeople.map(memb => {
    return memb.location
})

class RegisterLocalContainer extends React.PureComponent {

    componentDidMount() {

    }
    render() {
        return <RegisterLocal cities={a(allthepeople).filter((item, pos, self) => self.indexOf(item) == pos)}
            setLocation={this.props.setLocation} />
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { setLocation })(RegisterLocalContainer)