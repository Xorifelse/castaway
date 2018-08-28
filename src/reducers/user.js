import {
  SET_USERTYPE,
  SET_USERNAME,
  SET_LOOKINGFOR,
  SET_LOCATION,
  SET_DATE_FROM,
  SET_DATE_UNTIL,
  SET_GROUP
} from '../actions/user'

const initialState = {
  type: '',
  name: '',
  lookingFor: '',
  location: '',
  age: 0,
  group: null,
  dateFrom: '',
  dateTo: '',
  hobbies: [],
  arrayLiked: [],
  arrayDisliked: []
}

export default (state = '', action = {}) => {
  switch (action.type){
    case SET_USERTYPE:
      return {
        ...state, type: action.payload
      }
    case SET_USERNAME:
      return {
        ...state, name: action.payload
      }
    case SET_LOOKINGFOR:
      return {
        ...state, lookingFor: action.payload
      }
    case SET_LOCATION:
      return {
        ...state, location: action.payload
      }
    case SET_DATE_FROM:
      return {
        ...state, dateFrom: action.payload
      }
    case SET_DATE_UNTIL:
      return {
        ...state, dateTo: action.payload
    case SET_GROUP:
      return {
        ...state, group: action.payload
      }
    default:
      return initialState
  }
}