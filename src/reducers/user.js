import {
  SET_USERTYPE,
  SET_USERNAME,
  SET_LOOKINGFOR,
  SET_LOCATION,
  SET_NATIONALITY,
  SET_DATE_FROM,
  SET_DATE_UNTIL,
  SET_GROUP,
  SET_HOBBIES,
  ADD_LIKED,
  ADD_DISLIKED,
  SET_FIRESTORE_ID,
  SET_AVATAR_URL,
  NEXT_PERSON,
  PREVIOUS_PERSON
} from '../actions/user'

const initialState = {
  type: 'traveller',
  name: '',
  lookingFor: 'traveller',
  location: '',
  nationality: 'N/A', 
  age: 0,
  group: null,
  dateFrom: '',
  dateTo: '',
  hobbies: [],
  arrayLiked: [],
  arrayDisliked: [],
  feedCurrent: 0                  // current viewed person in matched
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
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
    case SET_NATIONALITY:
      return {
        ...state, nationality: action.payload
      }
    case SET_DATE_FROM:
      return {
        ...state, dateFrom: action.payload
      }
    case SET_DATE_UNTIL:
      return {
        ...state, dateTo: action.payload
      }
    case SET_GROUP:
      return {
        ...state, group: action.payload
      }
    case SET_HOBBIES:
      return {
        ...state,
        hobbies: [...state.hobbies, action.payload]
      }
    case ADD_LIKED:
      return {
        ...state,
        arrayLiked: state.arrayLiked.concat(action.payload),
        feedCurrent: state.feedCurrent + 1
      }
    case ADD_DISLIKED:
      return {
        ...state,
        arrayDisliked: state.arrayDisliked.concat(action.payload),
        feedCurrent: state.feedCurrent + 1
      }
    case NEXT_PERSON:
      return {
        ...state,
        feedCurrent: state.feedCurrent + 1
      }
    case PREVIOUS_PERSON:
      if (state.feedCurrent > 0) {
        return {
          ...state,
          feedCurrent: state.feedCurrent - 1
        }
      }
      break
    case SET_FIRESTORE_ID:
      return {
        ...state, firestoreID: action.payload
      }
    case SET_AVATAR_URL:
      return {
        ...state, avatar: action.payload
      }
    default:
      return state
  }
}