import React, { PropTypes } from 'react'
import { LineChart } from 'react-d3-basic'
import { map, keys } from 'ramda'

const getChartSeries = sources => {
  return map(source => {
    switch (source) {
      case 'averageWellbeingPerDay':
        return {
          field: 'averageWellbeing',
          name: 'Average wellbeing per day (SelfReflect)',
          color: '#555555'
        }
      case 'numTweetsPerDay':
        return {
          field: 'numTweets',
          name: 'Number of tweets per day (Twitter)',
          color: '#1da1f3'
        }
      case 'distanceExercisedPerDay':
        return {
          field: 'distanceExercised',
          name: 'Distance exercised per day (Strava)',
          color: '#fc4c02'
        }
      default:
        return
    }
  }, keys(sources))
}

const generateGraph = (sources, data) => {
  const chartSeries = getChartSeries(sources)

  return (
    <div>
      <LineChart
        data={data}
        chartSeries={chartSeries}
        x={data => {
          return new Date(data.timestamp)
        }}
        xScale='time'
      />
    </div>
  )
}

const getContent = (isSubmitted, isLoading, sources, data) => {
  if (!isSubmitted) {
    return
  }

  if (isLoading) {
    return (
      <div className="graph-loading-message">
        Generating graph...
      </div>
    )
  }

  return generateGraph(sources, data)
}

const Graph = ({ isSubmitted, isLoading, sources, data }) => (
  <div className="container graph-div">
    {getContent(isSubmitted, isLoading, sources, data)}
  </div>
)

Graph.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  sources: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired
}

export default Graph
