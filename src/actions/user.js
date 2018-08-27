
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
