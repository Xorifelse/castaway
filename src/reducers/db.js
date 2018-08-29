import {FETCH_ALL_DB, FETCH_MATCHED} from '../actions/db'

const initialState = {
  dbResults: [],
  dbMatches: [
    {
      age: 0,
      arrayDisliked: [],
      arrayLiked: [],
      avatar: 'https://firebasestorage.googleapis.com/v0/b/cast-away-team-d.appspot.com/o/images%2FISHOTADRAGON.jpgwduq58?alt=media&token=84e5a2ee-aa6d-42c7-ac17-e63065fc2bc2',
      dateFrom: {
        seconds: 1535587200,
        nanoseconds: 0
      },
      dateTo: {
        seconds: 1597881600,
        nanoseconds: 0
      },
      feedCurrent: 0,
      group: false,
      hobbies: [],
      location: 'Breda',
      lookingFor: 'traveller',
      name: 'Evert',
      type: 'local'
    },
    {
      age: 0,
      arrayDisliked: [],
      arrayLiked: [],
      avatar: 'https://firebasestorage.googleapis.com/v0/b/cast-away-team-d.appspot.com/o/images%2Fpetervandijk-fotograferend.jpgsnflc?alt=media&token=2393135f-ea65-4d5d-a0cd-51e52b546ad5',
      dateFrom: {
        seconds: 1535587200,
        nanoseconds: 0
      },
      dateTo: {
        seconds: 1535673600,
        nanoseconds: 0
      },
      feedCurrent: 0,
      group: false,
      hobbies: [],
      location: 'Rotterdam',
      lookingFor: 'traveller',
      name: 'Peter',
      type: 'local'
    },
    {
      age: 0,
      arrayDisliked: [],
      arrayLiked: [],
      avatar: 'https://firebasestorage.googleapis.com/v0/b/cast-away-team-d.appspot.com/o/images%2Fimage.jpgu7fbb?alt=media&token=f5b8b0a1-be0e-40a3-9c6f-01bfc29270ac',
      dateFrom: {
        seconds: 1535587200,
        nanoseconds: 0
      },
      dateTo: {
        seconds: 1535673600,
        nanoseconds: 0
      },
      feedCurrent: 0,
      group: true,
      hobbies: [],
      location: 'Amsterdam',
      lookingFor: 'traveller',
      name: 'Team D',
      type: 'local'
    }
  ]
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