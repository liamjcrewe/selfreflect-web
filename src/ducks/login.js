// Constants
const UPDATE_LOGIN_EMAIL = 'UPDATE_LOGIN_EMAIL'
const UPDATE_LOGIN_PASSWORD = 'UPDATE_LOGIN_PASSWORD'
const UPDATE_LOGIN_IS_LOADING = 'UPDATE_LOGIN_IS_LOADING'
const UPDATE_LOGIN_IS_SUBMITTED = 'UPDATE_LOGIN_IS_SUBMITTED'
const UPDATE_LOGIN_SUBMIT_ERROR = 'UPDATE_LOGIN_SUBMIT_ERROR'
const RESET_LOGIN_STATE = 'RESET_LOGIN_STATE'

// Actions
export const updateEmail = email => {
  return {
    type: UPDATE_LOGIN_EMAIL,
    email
  }
}

export const updatePassword = password => {
  return {
    type: UPDATE_LOGIN_PASSWORD,
    password
  }
}

export const updateIsLoading = isLoading => {
  return {
    type: UPDATE_LOGIN_IS_LOADING,
    isLoading
  }
}

export const updateIsSubmitted = isSubmitted => {
  return {
    type: UPDATE_LOGIN_IS_SUBMITTED,
    isSubmitted
  }
}

export const updateSubmitError = submitError => {
  return {
    type: UPDATE_LOGIN_SUBMIT_ERROR,
    submitError
  }
}

export const resetState = () => {
  return {
    type: RESET_LOGIN_STATE
  }
}

// Reducer
const initialState = {
  email: '',
  password: '',
  isLoading: false,
  isSubmitted: false,
  submitError: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOGIN_EMAIL:
      return {
        ...state,
        email: action.email
      }
    case UPDATE_LOGIN_PASSWORD:
      return {
        ...state,
        password: action.password
      }
    case UPDATE_LOGIN_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case UPDATE_LOGIN_IS_SUBMITTED:
      return {
        ...state,
        isSubmitted: action.isSubmitted
      }
    case UPDATE_LOGIN_SUBMIT_ERROR:
      return {
        ...state,
        submitError: action.submitError
      }
    case RESET_LOGIN_STATE:
      return initialState
    default:
      return state
  }
}
