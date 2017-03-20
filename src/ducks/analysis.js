// Constants
const UPDATE_AVERAGE_WELLBEING_PER_DAY = 'UPDATE_AVERAGE_WELLBEING_PER_DAY'
const UPDATE_NUM_TWEETS_PER_DAY = 'UPDATE_NUM_TWEETS_PER_DAY'
const UPDATE_DISTANCE_EXERCISED_PER_DAY = 'UPDATE_DISTANCE_EXERCISED_PER_DAY'
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

// Reducer
const initialState = {
  sources: {
    averageWellbeingPerDay: false,
    numTweetsPerDay: false,
    distanceExercisedPerDay: false
  },
  data: [
    {
      timestamp: 1492642800000,
      totalWellbeing: 75.59,
      numWellbeings: 4,
      averageWellbeing: 18.8975,
      numTweets: 1,
      distanceExercised: 11
    },
    {
      timestamp: 1492902000000,
      totalWellbeing: 75.59,
      numWellbeings: 4,
      averageWellbeing: 8.8975,
      numTweets: 2,
      distanceExercised: 22
    },
    {
      timestamp: 1492988400000,
      totalWellbeing: 75.59,
      numWellbeings: 4,
      averageWellbeing: 10.8975,
      numTweets: 3,
      distanceExercised: 33
    },
    {
      timestamp: 1493334000000,
      totalWellbeing: 75.59,
      numWellbeings: 4,
      averageWellbeing: 18.8975,
      numTweets: 4,
      distanceExercised: 44
    },
    {
      timestamp: 1493420400000,
      totalWellbeing: 75.59,
      numWellbeings: 4,
      averageWellbeing: 2.8975,
      numTweets: 5,
      distanceExercised: 55
    },
    {
      timestamp: 1493593200000,
      totalWellbeing: 75.59,
      numWellbeings: 4,
      averageWellbeing: 7.8975,
      numTweets: 6,
      distanceExercised: 66
    }
  ],
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
    default:
      return state
  }
}
