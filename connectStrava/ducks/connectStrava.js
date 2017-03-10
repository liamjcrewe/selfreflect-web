// Constants
const UPDATE_IS_LOADING = 'UPDATE_IS_LOADING'
const UPDATE_IS_SUBMITTED = 'UPDATE_IS_SUBMITTED'
const UPDATE_SUBMIT_ERROR = 'UPDATE_SUBMIT_ERROR'

// Actions
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

// Reducer
const initialState = {
  isLoading: false,
  isSubmitted: false,
  submitError: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state
  }
}
