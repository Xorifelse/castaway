import {FETCH_ALL_DB, FETCH_MATCHED} from '../actions/db'

const initialState = {
  dbResults: [],
  dbMatches: [
    {
      age: 0,
      arrayDisliked: [],
      arrayLiked: [],
      avatar: 'https://firebasestorage.googleapis.com/v0/b/cast-away-team-d.appspot.com/o/images%2Fmonique.pngvy7wff?alt=media&token=04706981-4213-4608-a160-9714d51f24e0',
      dateFrom: {
        seconds: 1534896000,
        nanoseconds: 0
      },
      dateTo: {
        seconds: 1560470400,
        nanoseconds: 0
      },
      feedCurrent: 0,
      group: false,
      hobbies: [
        'walking',
        'yoga',
        'jogging'
      ],
      location: 'Amsterdam',
      lookingFor: 'traveller',
      name: 'Monique',
      type: 'local',
      docid: '46MNzVJsbumSqptYYrFF'
    },
    {
      age: 0,
      arrayDisliked: [],
      arrayLiked: [],
      avatar: 'https://firebasestorage.googleapis.com/v0/b/cast-away-team-d.appspot.com/o/images%2F15356158597251747101854355473299.jpg34ddol?alt=media&token=f5d5493a-0773-42b6-a8a4-902790dcec4d',
      dateFrom: {
        seconds: 1535241600,
        nanoseconds: 0
      },
      dateTo: {
        seconds: 1551312000,
        nanoseconds: 0
      },
      feedCurrent: 0,
      group: false,
      hobbies: [
        'yoga'
      ],
      location: 'Amsterdam',
      lookingFor: 'traveller',
      name: 'Johan',
      type: 'local',
      docid: 'MXSmq3VJZNzGBYiJcaJi'
    },
    {
      age: 0,
      arrayDisliked: [],
      arrayLiked: [],
      avatar: 'https://firebasestorage.googleapis.com/v0/b/cast-away-team-d.appspot.com/o/images%2Fanonymous.jpgqauqra?alt=media&token=2bea6c37-9d28-408e-9f5c-589f0d852d0b',
      dateFrom: {
        seconds: 1535587200,
        nanoseconds: 0
      },
      dateTo: {
        seconds: 1535673600,
        nanoseconds: 0
      },
      feedCurrent: 0,
      group: null,
      hobbies: [],
      location: 'Amsterdam',
      lookingFor: 'traveller',
      name: 'Tim',
      type: 'local',
      docid: 'gwhdsnkgYkioRuCdO51U'
    },
    {
      age: 0,
      arrayDisliked: [],
      arrayLiked: [],
      avatar: 'https://firebasestorage.googleapis.com/v0/b/cast-away-team-d.appspot.com/o/images%2Fjaaptineke.pngp2lxfv?alt=media&token=91ae695a-3c47-4ed9-977f-0ff3f939ebc4',
      dateFrom: {
        seconds: 1535587200,
        nanoseconds: 0
      },
      dateTo: {
        seconds: 1574294400,
        nanoseconds: 0
      },
      feedCurrent: 0,
      group: true,
      hobbies: [],
      location: 'Amsterdam',
      lookingFor: 'traveller',
      name: 'Jaap en Tineke',
      type: 'local',
      docid: 'mtPJ7JjwzOOyJd5NQ7js'
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