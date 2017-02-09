// Constants
const UPDATE_REGISTER_EMAIL = 'UPDATE_REGISTER_EMAIL'
const UPDATE_REGISTER_PASSWORD = 'UPDATE_REGISTER_PASSWORD'
const UPDATE_REGISTER_CONFIRM = 'UPDATE_REGISTER_CONFIRM'
const UPDATE_REGISTER_IS_LOADING = 'UPDATE_REGISTER_IS_LOADING'
const UPDATE_REGISTER_IS_SUBMITTED = 'UPDATE_REGISTER_IS_SUBMITTED'
const UPDATE_REGISTER_SUBMIT_ERROR = 'UPDATE_REGISTER_SUBMIT_ERROR'
const RESET_REGISTER = 'RESET_REGISTER'

// Actions
export const updateEmail = email => {
  return {
    type: UPDATE_REGISTER_EMAIL,
    email
  }
}

export const updatePassword = password => {
  return {
    type: UPDATE_REGISTER_PASSWORD,
    password
  }
}

export const updateConfirm = confirm => {
  return {
    type: UPDATE_REGISTER_CONFIRM,
    confirm
  }
}

export const updateIsLoading = isLoading => {
  return {
    type: UPDATE_REGISTER_IS_LOADING,
    isLoading
  }
}

export const updateIsSubmitted = isSubmitted => {
  return {
    type: UPDATE_REGISTER_IS_SUBMITTED,
    isSubmitted
  }
}

export const updateSubmitError = submitError => {
  return {
    type: UPDATE_REGISTER_SUBMIT_ERROR,
    submitError
  }
}

export const resetRegister = () => {
  return {
    type: RESET_REGISTER
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
    case UPDATE_REGISTER_EMAIL:
      return {
        ...state,
        email: action.email
      }
    case UPDATE_REGISTER_PASSWORD:
      return {
        ...state,
        password: action.password
      }
    case UPDATE_REGISTER_CONFIRM:
      return {
        ...state,
        confirm: action.confirm
      }
    case UPDATE_REGISTER_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case UPDATE_REGISTER_IS_SUBMITTED:
      return {
        ...state,
        isSubmitted: action.isSubmitted
      }
    case UPDATE_REGISTER_SUBMIT_ERROR:
      return {
        ...state,
        submitError: action.submitError
      }
    case RESET_REGISTER:
      return initialState
    default:
      return state
  }
}
