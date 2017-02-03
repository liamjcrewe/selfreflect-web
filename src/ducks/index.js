import { combineReducers } from 'redux'

import tab from './tab'
import register from './register'
import login from './login'
import user from './user'

export default combineReducers({
  tab,
  register,
  login,
  user
})
