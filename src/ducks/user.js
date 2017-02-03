// Constants
const UPDATE_ID = 'UPDATE_ID'
const UPDATE_TOKEN = 'UPDATE_TOKEN'
const RESET_USER_STATE = 'RESET_USER_STATE'

// Actions
export const updateId = id => {
  return {
    type: UPDATE_ID,
    id
  }
}

export const updateToken = ({ value, exp }) => {
  return {
    type: UPDATE_TOKEN,
    value,
    exp
  }
}

export const resetUserState = () => {
  return {
    type: RESET_USER_STATE
  }
}

// Reducer
const initialState = {
  id: 0,
  token: {
    value: '',
    exp: 0
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ID:
      return {
        ...state,
        id: action.id
      }
    case UPDATE_TOKEN:
      return {
        ...state,
        token: {
          value: action.value,
          exp: action.exp
        }
      }
    case RESET_USER_STATE:
      return initialState
    default:
      return state
  }
}
