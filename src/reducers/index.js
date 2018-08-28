import { combineReducers } from 'redux'

import user from './user'
import db from './db'

export default combineReducers({
  user,
  db
})