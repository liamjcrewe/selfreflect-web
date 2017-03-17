import React, { PropTypes } from 'react'
import { map, keys } from 'ramda'
import { LineChart } from 'react-d3-basic'

const getChartSeries = sources => {
  return map(source => {
    switch (source) {
      case 'averageWellbeingPerDay':
        return {
          field: 'averageWellbeingPerDay',
          name: 'Average wellbeing per day'
        }
      case 'numTweetsPerDay':
        return {
          field: 'numTweetsPerDay',
          name: 'Number of tweets per day'
        }
      case 'timeExercisedPerDay':
        return {
          field: 'timeExercisedPerDay',
          name: 'Time exercised per day'
        }
      default:
        return
    }
  }, keys(sources))
}

const generateGraph = (sources, data) => {
  const margins = {left: 100, right: 100, top: 100, bottom: 100}
  const chartSeries = getChartSeries(sources)

  return (
    <LineChart
      data={data}
      width={700}
      height={300}
      margins={margins}
      chartSeries={chartSeries}
      x={data => data.date} // NOTE: data.date should be a unix timestamp
      xScale='date'
    />
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
