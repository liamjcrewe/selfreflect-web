import React, { PropTypes } from 'react'

const GenerateButton = ({ sources, userId, token, generateGraph }) => (
  <div className="generate-button-div">
    <button
      className="button-primary"
      onClick={() => generateGraph(sources, userId, token)}
    >
      Generate
    </button>
  </div>
)

GenerateButton.propTypes = {
  sources: PropTypes.shape({
    averageWellbeingPerDay: PropTypes.bool.isRequired,
    numTweetsPerDay: PropTypes.bool.isRequired,
    distanceExercisedPerDay: PropTypes.bool.isRequired
  }).isRequired,
  userId: PropTypes.number.isRequired,
  token: PropTypes.string.isRequired,
  generateGraph: PropTypes.func.isRequired
}

export default GenerateButton
