// Constants
const UPDATE_AVERAGE_WELLBEING_PER_DAY = 'UPDATE_AVERAGE_WELLBEING_PER_DAY'
const UPDATE_NUM_TWEETS_PER_DAY = 'UPDATE_NUM_TWEETS_PER_DAY'
const UPDATE_TIME_EXERCISED_PER_DAY = 'UPDATE_TIME_EXERCISED_PER_DAY'
const UPDATE_ANALYSIS_IS_SUBMITTED = 'UPDATE_ANALYSIS_IS_SUBMITTED'
const UPDATE_ANALYSIS_IS_LOADING = 'UPDATE_ANALYSIS_IS_LOADING'

// Actions
export const updateAverageWellbeingPerDay = isSelected => {
  return {
    type: UPDATE_AVERAGE_WELLBEING_PER_DAY,
    isSelected
  }
}

export const updateNumTweetsPerDay = isSelected => {
  return {
    type: UPDATE_NUM_TWEETS_PER_DAY,
    isSelected
  }
}

export const updateTimeExercisedPerDay = isSelected => {
  return {
    type: UPDATE_TIME_EXERCISED_PER_DAY,
    isSelected
  }
}

export const updateIsSubmitted = isSubmitted => {
  return {
    type: UPDATE_ANALYSIS_IS_SUBMITTED,
    isSubmitted
  }
}

export const updateIsLoading = isLoading => {
  return {
    type: UPDATE_ANALYSIS_IS_LOADING,
    isLoading
  }
}

// Reducer
const initialState = {
  sources: {
    averageWellbeingPerDay: false,
    numTweetsPerDay: false,
    timeExercisedPerDay: false
  },
  data: [],
  isSubmitted: false,
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_AVERAGE_WELLBEING_PER_DAY:
      return {
        ...state,
        sources: {
          ...state.sources,
          averageWellbeingPerDay: action.isSelected
        }
      }
    case UPDATE_NUM_TWEETS_PER_DAY:
      return {
        ...state,
        sources: {
          ...state.sources,
          numTweetsPerDay: action.isSelected
        }
      }
    case UPDATE_TIME_EXERCISED_PER_DAY:
      return {
        ...state,
        sources: {
          ...state.sources,
          timeExercisedPerDay: action.isSelected
        }
      }
    case UPDATE_ANALYSIS_IS_SUBMITTED:
      return {
        ...state,
        isSubmitted: action.isSubmitted
      }
    case UPDATE_ANALYSIS_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    default:
      return state
  }
}
