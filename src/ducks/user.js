// Constants
const UPDATE_ID = 'UPDATE_ID'
const SET_USER = 'SET_USER'
const RESET_USER = 'RESET_USER'

// Actions
export const updateId = id => {
  return {
    type: UPDATE_ID,
    id
  }
}

export const setUser = ({ id, email }) => {
  return {
    type: SET_USER,
    id,
    email
  }
}

export const resetUser = () => {
  return {
    type: RESET_USER
  }
}

// Reducer
const initialState = {
  id: 0,
  email: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ID:
      return {
        ...state,
        id: action.id
      }
    case SET_USER:
      return {
        id: action.id,
        email: action.email
      }
    case RESET_USER:
      return initialState
    default:
      return state
  }
}
