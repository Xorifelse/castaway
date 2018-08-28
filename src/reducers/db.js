import {FETCH_DB_RESULTS} from '../actions/db'

const initialState = {
  dbResults: []
}

export default (state = '', action = {}) => {
  switch (action.type){
    case FETCH_DB_RESULTS:
      return {
        ...state,
        dbResults: action.payload
      }
    default:
      return initialState
  }
}