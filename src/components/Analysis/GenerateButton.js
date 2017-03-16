import React, { PropTypes } from 'react'

const GenerateButton = ({ sources, generateGraph }) => (
  <div className="generate-button-div">
    <button
      className="button-primary"
      onClick={() => generateGraph(sources)}
    >
      Generate
    </button>
  </div>
)

GenerateButton.propTypes = {
  sources: PropTypes.shape({
    averageWellbeingPerDay: PropTypes.bool.isRequired,
    numTweetsPerDay: PropTypes.bool.isRequired,
    timeExercisedPerDay: PropTypes.bool.isRequired
  }).isRequired,
  generateGraph: PropTypes.func.isRequired
}

export default GenerateButton
