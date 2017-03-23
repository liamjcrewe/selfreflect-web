// Constants
const UPDATE_AVERAGE_WELLBEING_PER_DAY = 'UPDATE_AVERAGE_WELLBEING_PER_DAY'
const UPDATE_NUM_TWEETS_PER_DAY = 'UPDATE_NUM_TWEETS_PER_DAY'
const UPDATE_DISTANCE_EXERCISED_PER_DAY = 'UPDATE_DISTANCE_EXERCISED_PER_DAY'
const UPDATE_ANALYSIS_IS_SUBMITTED = 'UPDATE_ANALYSIS_IS_SUBMITTED'
const UPDATE_ANALYSIS_IS_LOADING = 'UPDATE_ANALYSIS_IS_LOADING'
const UPDATE_GRAPH_DATA = 'UPDATE_GRAPH_DATA'

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

export const updateDistanceExercisedPerDay = isSelected => {
  return {
    type: UPDATE_DISTANCE_EXERCISED_PER_DAY,
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

export const updateGraphData = data => {
  return {
    type: UPDATE_GRAPH_DATA,
    data
  }
}

// Reducer
const initialState = {
  sources: {
    averageWellbeingPerDay: false,
    numTweetsPerDay: false,
    distanceExercisedPerDay: false
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
    case UPDATE_DISTANCE_EXERCISED_PER_DAY:
      return {
        ...state,
        sources: {
          ...state.sources,
          distanceExercisedPerDay: action.isSelected
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
    case UPDATE_GRAPH_DATA:
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}
