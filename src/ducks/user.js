// Constants
const UPDATE_IS_LOADING = 'UPDATE_IS_LOADING'
const UPDATE_ID = 'UPDATE_ID'
const UPDATE_USER = 'UPDATE_USER'
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

export const updateUser = ({ id, email, twitter_username }) => {
  return {
    type: UPDATE_USER,
    id,
    email,
    twitter_username
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
  email: '',
  twitter_username: ''
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
    case UPDATE_USER:
      return {
        ...state,
        id: action.id,
        email: action.email,
        twitter_username: action.twitter_username
      }
    case RESET_USER:
      return initialState
    default:
      return state
  }
}
