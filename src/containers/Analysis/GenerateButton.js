import { connect } from 'react-redux'
import { reverse, propEq, findIndex } from 'ramda'

import { api } from '../../../config/api'
import GenerateButton from '../../components/Analysis/GenerateButton'
import {
  updateIsLoading,
  updateIsSubmitted,
  updateGraphData
} from '../../ducks/analysis'

const baseDataNode = {
  timestamp: 0,
  totalWellbeing: 0,
  numWellbeings: 0,
  averageWellbeing: 0,
  numTweets: 0,
  distanceExercised: 0
}

const processWellbeingData = (data, results) => {
  // Reverse so that results are in ascending order
  const ascendingResults = reverse(results)

  const timestampMatches = timestamp => propEq('timestamp', timestamp)

  for (let i = 0; i < ascendingResults.length; i++) {
    const dataNode = ascendingResults[i]

    const date = new Date(dataNode.date_recorded.substr(0, 10))
    const timestamp = date.valueOf() // Unix timestamp

    // Check if this timestamp (valueOf) is already in data
    // i.e. Multiple recordings from one day
    const existingIndex = findIndex(timestampMatches(timestamp))(data)

    // If node already exists, update it
    if (existingIndex !== -1) {
      data[existingIndex].totalWellbeing += dataNode.wellbeing
      data[existingIndex].numWellbeings++

      continue
    }

    // Else create node
    data.push({
      ...baseDataNode,
      timestamp: timestamp,
      totalWellbeing: dataNode.wellbeing,
      numWellbeings: 1
    })
  }

  // Calculate averages
  for (let i = 0; i < data.length; i++) {
    const numWellbeings = data[i].numWellbeings

    if (numWellbeings === 0) {
      continue
    }

    data[i].averageWellbeing = data[i].totalWellbeing / numWellbeings
  }

  return data
}

const fetchAverageWellbeingPerDay = (data, userId, token, next) => {
  return fetch(api + '/v1/users/' + userId + '/wellbeings?limit=200', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  })
    .then(response => {
      // Some error
      if (response.status !== 200) {
        return next(data)
      }

      // Success
      return response.json()
        .then(json => {
          next(processWellbeingData(data, json.results))
        })
    })
    .catch(_ => {
      return next(data)
    })
}

const fetchNumTweetsPerDay = (data, userId, token, next) => {

}

const fetchTimeExercisedPerDay = (data, userId, token, next) => {

}

const generateGraph = (dispatch, sources, userId, token) => {
  dispatch(updateIsLoading(true))
  dispatch(updateIsSubmitted(true))

  return fetchAverageWellbeingPerDay([], userId, token, data => {
    dispatch(updateIsLoading(false))

    dispatch(updateGraphData(data))
  })

  /* @TODO:
   *   - Fetch data
   *   - Process data to format required, including merging data from same
   *      dates
   *   - Update state to render graph
   */
}

const mapStateToProps = state => {
  return {
    sources: state.analysis.sources,
    userId: state.user.id,
    token: state.token.value
  }
}

const mapDispatchToProps = dispatch => {
  return {
    generateGraph: (sources, userId, token) => {
      generateGraph(dispatch, sources, userId, token)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenerateButton)
