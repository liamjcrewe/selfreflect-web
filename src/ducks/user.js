// Constants
const UPDATE_ID = 'UPDATE_ID'
const UPDATE_USER = 'UPDATE_USER'
const RESET_USER = 'RESET_USER'

// Actions
export const updateId = id => {
  return {
    type: UPDATE_ID,
    id
  }
}

export const updateUser = ({ id, email }) => {
  return {
    type: UPDATE_USER,
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
    case UPDATE_USER:
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
