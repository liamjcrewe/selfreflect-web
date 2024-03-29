import React, { PropTypes } from 'react'

const Strava = ({ isSelected, updateIsSelected }) => (
  <div className="four columns">
    <div className="source-title">
      Strava
    </div>
    <div className="source-checkboxes">
      <label className="source-label">
        Distance exercised per day (km):
        <input
          name="distance-exercised-per-day"
          type="checkbox"
          className="source-checkbox"
          checked={isSelected}
          onChange={() => updateIsSelected(!isSelected)}
        />
      </label>
    </div>
  </div>
)

Strava.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  updateIsSelected: PropTypes.func.isRequired
}

export default Strava
