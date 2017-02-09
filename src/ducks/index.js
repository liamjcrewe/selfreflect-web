import { combineReducers } from 'redux'

import login from './login'
import record from './record'
import register from './register'
import tab from './tab'
import token from './token'
import user from './user'

export default combineReducers({
  login,
  record,
  register,
  tab,
  token,
  user
})
