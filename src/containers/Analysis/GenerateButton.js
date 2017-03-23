import { connect } from 'react-redux'
import { propEq, findIndex, sortBy, prop } from 'ramda'

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
  distanceExercised: 0.0
}

const processAverageWellbeing = (data, results) => {
  const timestampMatches = timestamp => propEq('timestamp', timestamp)

  for (let i = 0; i < results.length; i++) {
    const dataNode = results[i]

    // Don't want time included, only date
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

    if (!numWellbeings) {
      continue
    }

    data[i].averageWellbeing = data[i].totalWellbeing / numWellbeings
  }

  return data
}

const fetchAverageWellbeingPerDay = (shouldRun, data, userId, token, next) => {
  if (!shouldRun) {
    return next(data)
  }

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
          next(processAverageWellbeing(data, json.results))
        })
    })
    .catch(_ => {
      return next(data)
    })
}

const processNumTweets = (data, results) => {
  const timestampMatches = timestamp => propEq('timestamp', timestamp)

  for (let i = 0; i < results.length; i++) {
    const dataNode = results[i]

    const created = dataNode.created_at

    // Don't want time included, only day & month and year
    const date = new Date(
      created.substr(0, 10) + ' ' + created.substr(created.length - 4, 4)
    )

    const timestamp = date.valueOf() // Unix timestamp

    // Check if this timestamp (valueOf) is already in data
    // i.e. Multiple recordings from one day
    const existingIndex = findIndex(timestampMatches(timestamp))(data)

    // If node already exists, update it
    if (existingIndex !== -1) {
      data[existingIndex].numTweets++

      continue
    }

    // Else create node
    data.push({
      ...baseDataNode,
      timestamp: timestamp,
      numTweets: 1
    })
  }

  return data
}

const fetchNumTweetsPerDay = (shouldRun, data, userId, token, next) => {
  if (!shouldRun) {
    return next(data)
  }

  return fetch(api + '/v1/users/' + userId + '/tweets', {
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
          next(processNumTweets(data, json))
        })
    })
    .catch(_ => {
      return next(data)
    })
}

const processDistanceExercised = (data, results) => {
  const timestampMatches = timestamp => propEq('timestamp', timestamp)

  for (let i = 0; i < results.length; i++) {
    const dataNode = results[i]

    // Don't want time included, only date
    const date = new Date(dataNode.start_date.substr(0, 10))

    const timestamp = date.valueOf() // Unix timestamp

    // Check if this timestamp (valueOf) is already in data
    // i.e. Multiple recordings from one day
    const existingIndex = findIndex(timestampMatches(timestamp))(data)

    // If node already exists, update it
    if (existingIndex !== -1) {
      data[existingIndex].distanceExercised += (dataNode.distance / 1000)

      continue
    }

    // Else create node
    data.push({
      ...baseDataNode,
      timestamp: timestamp,
      distanceExercised: (dataNode.distance / 1000)
    })
  }

  return data
}

const fetchDistanceExercisedPerDay = (shouldRun, data, userId, token, next) => {
  if (!shouldRun) {
    return next(data)
  }

  return fetch(api + '/v1/users/' + userId + '/strava-data', {
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
          next(processDistanceExercised(data, json))
        })
    })
    .catch(_ => {
      return next(data)
    })
}

const generateGraph = (dispatch, sources, userId, token) => {
  dispatch(updateIsLoading(true))
  dispatch(updateIsSubmitted(true))

  const sortByDate = sortBy(prop('timestamp'))

  const isWellbeing = sources.averageWellbeingPerDay
  const isNumTweets = sources.numTweetsPerDay
  const isDistance = sources.distanceExercisedPerDay

  return fetchAverageWellbeingPerDay(isWellbeing, [], userId, token, data => {
    fetchNumTweetsPerDay(isNumTweets, data, userId, token, data => {
      fetchDistanceExercisedPerDay(isDistance, data, userId, token, data => {
        data = sortByDate(data)

        dispatch(updateIsLoading(false))

        dispatch(updateGraphData(data))
      })
    })
  })
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
