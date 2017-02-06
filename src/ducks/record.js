import { update } from 'ramda'

// Constants
const UPDATE_SCORE = 'UPDATE_SCORE'
const UPDATE_RECORD_IS_LOADING = 'UPDATE_RECORD_IS_LOADING'
const UPDATE_RECORD_IS_SUBMITTED = 'UPDATE_RECORD_IS_SUBMITTED'
const UPDATE_RECORD_SUBMIT_ERROR = 'UPDATE_RECORD_SUBMIT_ERROR'
const RESET_RECORD_STATE = 'RESET_RECORD_STATE'

// Actions
export const updateScore = (key, score) => {
  return {
    type: UPDATE_SCORE,
    key,
    score
  }
}

export const updateIsLoading = isLoading => {
  return {
    type: UPDATE_RECORD_IS_LOADING,
    isLoading
  }
}

export const updateIsSubmitted = isSubmitted => {
  return {
    type: UPDATE_RECORD_IS_SUBMITTED,
    isSubmitted
  }
}

export const updateSubmitError = submitError => {
  return {
    type: UPDATE_RECORD_SUBMIT_ERROR,
    submitError
  }
}

export const resetState = () => {
  return {
    type: RESET_RECORD_STATE
  }
}

// Reducer
const initialState = {
  scores: [0, 0, 0, 0, 0, 0, 0],
  isLoading: false,
  isSubmitted: false,
  submitError: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SCORE:
      return {
        ...state,
        scores: update(action.key, action.score, state.scores)
      }
    case UPDATE_RECORD_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case UPDATE_RECORD_IS_SUBMITTED:
      return {
        ...state,
        isSubmitted: action.isSubmitted
      }
    case UPDATE_RECORD_SUBMIT_ERROR:
      return {
        ...state,
        submitError: action.submitError
      }
    case RESET_RECORD_STATE:
      return initialState
    default:
      return state
  }
}
