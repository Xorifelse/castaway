import * as React from 'react'
import { connect } from 'react-redux'
import RegisterDatePicker from './RegisterDatePicker'



import {setDateFrom, setDateUntil} from '../actions/user'

function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}


class RegisterDatePickerContainer extends React.PureComponent {
  constructor(){
    super()

    this.state = {
      default: formatDate(new Date())
    }
  }
  componentDidMount(){


  }

  buttonNext(){

  }

  handleFrom(e, props){
    console.log(props)
    let d = new Date(e.target.value)
    if(d.getTime() > (new Date().getTime())){
      props.setDateFrom(d)
    }
  }

  handleUntil(e){
    console.log(e)
  }

  render() {
    return (
      <RegisterDatePicker
        defaultValue={this.state.default}
        onChangeFromFn={this.handleFrom}
        onChangeUntilFn={this.handleUntil}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {setDateFrom, setDateUntil})(RegisterDatePickerContainer)