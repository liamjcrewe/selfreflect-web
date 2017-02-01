import { combineReducers } from 'redux'

import myReducer from './myReducer'

const appReducers = combineReducers({
  myProp: myReducer
})

export default appReducers
