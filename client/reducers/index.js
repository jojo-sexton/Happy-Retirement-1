import { combineReducers } from 'redux'
import users from './users'
import user from './user'
import plan from './plan'

export default combineReducers({
  users,
  user,
  plan
})
