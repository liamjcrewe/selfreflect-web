// Constants
const UPDATE_EMAIL = 'UPDATE_EMAIL'
const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
const UPDATE_CONFIRM = 'UPDATE_CONFIRM'
const UPDATE_IS_LOADING = 'UPDATE_IS_LOADING'
const UPDATE_IS_SUBMITTED = 'UPDATE_IS_SUBMITTED'
const UPDATE_SUBMIT_ERROR = 'UPDATE_SUBMIT_ERROR'
const RESET_STATE = 'RESET_STATE'

// Actions
export const updateEmail = email => {
  return {
    type: UPDATE_EMAIL,
    email
  }
}

export const updatePassword = password => {
  return {
    type: UPDATE_PASSWORD,
    password
  }
}

export const updateConfirm = confirm => {
  return {
    type: UPDATE_CONFIRM,
    confirm
  }
}

export const updateIsLoading = isLoading => {
  return {
    type: UPDATE_IS_LOADING,
    isLoading
  }
}

export const updateIsSubmitted = isSubmitted => {
  return {
    type: UPDATE_IS_SUBMITTED,
    isSubmitted
  }
}

export const updateSubmitError = submitError => {
  return {
    type: UPDATE_SUBMIT_ERROR,
    submitError
  }
}

export const resetState = () => {
  return {
    type: RESET_STATE
  }
}

// Reducer
const initialState = {
  email: '',
  password: '',
  confirm: '',
  isLoading: false,
  isSubmitted: false,
  submitError: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.email
      }
    case UPDATE_PASSWORD:
      return {
        ...state,
        password: action.password
      }
    case UPDATE_CONFIRM:
      return {
        ...state,
        confirm: action.confirm
      }
    case UPDATE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case UPDATE_IS_SUBMITTED:
      return {
        ...state,
        isSubmitted: action.isSubmitted
      }
    case UPDATE_SUBMIT_ERROR:
      return {
        ...state,
        submitError: action.submitError
      }
    case RESET_STATE:
      return initialState
    default:
      return state
  }
}
