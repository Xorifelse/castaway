import {SET_USERTYPE, SET_USERNAME, SET_LOOKINGFOR, SET_LOCATION} from '../actions/user'

const initialState = {
  type: '',
  name: '',
  lookingFor: '',
  location: '',
  age: 0,
  group: false,
  dateFrom: '',
  dateTo: '',
  hobbies: [],
  arrayLiked: [],
  arrayDisliked: []
}

export default (state = '', action = {}) => {
  switch (action.type){
    case SET_USERTYPE:
    console.log('reducer for type is called')
      return {
        ...state, type: action.payload
      }
    case SET_USERNAME:
    console.log('reducer for name is called')
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
    default:
      return initialState
  }
}