
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
