// import {SKELETON_ACTION} from '../actions/skeletonAction'

const initialState = {
  type: '',
  lookingFor: '',
  location: '',
  age: '',
  dateFrom: '',
  dateTo: '',
  hobbies: [],
  arrayLiked: [],
  arrayDisliked: []
}

export default (state = '', action = {}) => {
  switch (action.type){
    default:
      return initialState
  }
}