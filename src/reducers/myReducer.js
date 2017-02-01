import { MY_ACTION } from '../actions'

const myReducer = (state = 0, action) => {
  switch (action.type) {
    case MY_ACTION:
      return state + 1
    default:
      return state
  }
}

export default myReducer
