// Constants
const UPDATE_TWITTER_PASSWORD = 'UPDATE_TWITTER_PASSWORD'
const UPDATE_TWITTER_USERNAME = 'UPDATE_TWITTER_USERNAME'
const UPDATE_TWITTER_IS_LOADING = 'UPDATE_TWITTER_IS_LOADING'
const UPDATE_TWITTER_IS_SUBMITTED = 'UPDATE_TWITTER_IS_SUBMITTED'
const UPDATE_TWITTER_SUBMIT_ERROR = 'UPDATE_TWITTER_SUBMIT_ERROR'

// Actions
export const updatePassword = password => {
  return {
    type: UPDATE_TWITTER_PASSWORD,
    password
  }
}

export const updateTwitterUsername = twitter_username => {
  return {
    type: UPDATE_TWITTER_USERNAME,
    twitter_username
  }
}

export const updateIsLoading = isLoading => {
  return {
    type: UPDATE_TWITTER_IS_LOADING,
    isLoading
  }
}

export const updateIsSubmitted = isSubmitted => {
  return {
    type: UPDATE_TWITTER_IS_SUBMITTED,
    isSubmitted
  }
}

export const updateSubmitError = submitError => {
  return {
    type: UPDATE_TWITTER_SUBMIT_ERROR,
    submitError
  }
}

// Reducer
const initialState = {
  password: '',
  twitter_username: '',
  isLoading: false,
  isSubmitted: false,
  submitError: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TWITTER_PASSWORD:
      return {
        ...state,
        password: action.password
      }
    case UPDATE_TWITTER_USERNAME:
      return {
        ...state,
        twitter_username: action.twitter_username
      }
    case UPDATE_TWITTER_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case UPDATE_TWITTER_IS_SUBMITTED:
      return {
        ...state,
        isSubmitted: action.isSubmitted
      }
    case UPDATE_TWITTER_SUBMIT_ERROR:
      return {
        ...state,
        submitError: action.submitError
      }
    default:
      return state
  }
}
