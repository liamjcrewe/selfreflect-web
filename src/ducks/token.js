// Constants
const UPDATE_TOKEN = 'UPDATE_TOKEN'
const RESET_TOKEN = 'RESET_TOKEN'

// Actions
export const updateToken = ({ value, exp }) => {
  return {
    type: UPDATE_TOKEN,
    value,
    exp
  }
}
export const resetToken = () => {
  return {
    type: RESET_TOKEN
  }
}

// Reducer
const initialState = {
  value: '',
  exp: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return {
        value: action.value,
        exp: action.exp
      }
    case RESET_TOKEN:
      return initialState
    default:
      return state
  }
}
