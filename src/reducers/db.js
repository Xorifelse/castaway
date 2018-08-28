import {FETCH_ALL_DB} from '../actions/db'

const initialState = {
  dbResults: [],
  dbMatches: []
}

export default (state = '', action = {}) => {
  switch (action.type){
    case FETCH_ALL_DB:
      return {
        ...state,
        dbResults: action.payload
      }
    default:
      return initialState
  }
}