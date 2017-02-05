// Constants
const UPDATE_IS_LOADING = 'UPDATE_IS_LOADING'
const UPDATE_ID = 'UPDATE_ID'
const SET_USER = 'SET_USER'
const RESET_USER = 'RESET_USER'

// Actions
export const updateIsLoading = isLoading => {
  return {
    type: UPDATE_IS_LOADING,
    isLoading
  }
}

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
  isLoading: false,
  id: 0,
  email: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
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
