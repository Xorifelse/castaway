import {FETCH_ALL_DB, FETCH_MATCHED} from '../actions/db'

const initialState = {
  dbResults: [],
  dbMatches: []
}

export default (state = initialState, action = {}) => {
  switch (action.type){
    case FETCH_ALL_DB:
      return {
        ...state,
        dbResults: action.payload
      }
      case FETCH_MATCHED:
      return {
        ...state,
        dbMatches: [...state.dbMatches, action.payload]
      }
    default:
      return state
  }
}