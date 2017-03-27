import { combineReducers } from 'redux'

import account from './account'
import analysis from './analysis'
import login from './login'
import record from './record'
import register from './register'
import tab from './tab'
import token from './token'
import twitter from './twitter'
import user from './user'

export default combineReducers({
  account,
  analysis,
  login,
  record,
  register,
  tab,
  token,
  twitter,
  user
})
