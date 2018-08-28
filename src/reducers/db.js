import {PUSH_DB_RESULTS} from '../actions/db'

const initialState = {
}

export default (state = '', action = {}) => {
  switch (action.type){
    case PUSH_DB_RESULTS:
      return {
        dbResults: action.payload
      }
    default:
      return initialState
  }
}