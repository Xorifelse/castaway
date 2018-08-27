import * as React from 'react'
import { connect } from 'react-redux'
import { allthepeople } from '../lib/People'
import { setUserType, setUserName, setLookingFor, setLocation } from '../actions/user'


const a = allthepeople.map(memb => {
    return memb.location
})

class RegisterLocal extends React.PureComponent {

    componentDidMount() {

    }
    render() {
        return <div>Hey
          {a.filter(function (item, pos, self) {
                return self.indexOf(item) == pos;
            })}
        </div>
    }
}


const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, { setUserType, setUserName, setLookingFor, setLocation })(RegisterLocal)