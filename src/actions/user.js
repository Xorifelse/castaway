
export const SET_USERTYPE = 'SET_USERTYPE'
export function setUserType(type) {
  return {
    type: SET_USERTYPE,
    payload: type
  }
}

export const SET_USERNAME = 'SET_USERNAME'
export function setUserName(name) {
  return {
    type: SET_USERNAME,
    payload: name
  }
}

export const SET_LOOKINGFOR = 'SET_LOOKINGFOR'
export function setLookingFor(type) {
  return {
    type: SET_LOOKINGFOR,
    payload: type
  }
}

export const SET_LOCATION = 'SET_LOCATION'
export function setLocation(location) {
  return {
    type: SET_LOCATION,
    payload: location
  }
}

export const SET_NATIONALITY = 'SET_NATIONALITY'
export function setNationality(nationality) {
  return {
    type: SET_NATIONALITY,
    payload: nationality
  }
}

export const SET_DATE_FROM = 'SET DATE FROM'
export function setDateFrom(datetime) {
  return {
    type: SET_DATE_FROM,
    payload: datetime
  }
}

export const SET_DATE_UNTIL = 'SET DATE UNTIL'
export function setDateUntil(datetime) {
  return {
    type: SET_DATE_UNTIL,
    payload: datetime
  }
}

export const SET_GROUP = 'SET_GROUP'
export function setGroup(group) {
  return {
    type: SET_GROUP,
    payload: group
  }
}

export const SET_HOBBIES = 'SET_HOBBIES'
export function setHobbies(hobbie) {
  return {
    type: SET_HOBBIES,
    payload: hobbie
  }
}

export const ADD_LIKED = 'ADD_LIKED'
export function addPerson(id){
  return {
    type: ADD_LIKED,
    payload: id
  }
}

export const ADD_DISLIKED = 'ADD_DISLIKED'
export function removePerson(id){
  return {
    type: ADD_DISLIKED,
    payload: id
  }
}

export const PREVIOUS_PERSON = 'PREVIOUS_PERSON'
export function previousPerson(){
  return {
    type: PREVIOUS_PERSON,
    payload: null
  }
}

export const NEXT_PERSON = 'NEXT_PERSON'
export function nextPerson(){
  return {
    type: NEXT_PERSON,
    payload: null
  }
}

export const SET_FIRESTORE_ID = 'SET_FIRESTORE_ID'
export function setFirestoreID(id){
  return {
    type: SET_FIRESTORE_ID,
    payload: id
  }
}

export const SET_AVATAR_URL = 'SET_AVATAR_URL'
export function setAvatarUrl(url){
  return {
    type: SET_AVATAR_URL,
    payload: url
  }
}

export const RESET_FEED_CURRENT = 'RESET_FEED_CURRENT'
export function resetFeedCurrent(){
  return {
    type: RESET_FEED_CURRENT
  }
}
