import React, { PropTypes } from 'react'

const SelfReflect = ({ isSelected, updateIsSelected }) => (
  <div className="four columns">
    <div className="source-title">
      SelfReflect
    </div>
    <div className="source-checkboxes">
      <label className="source-label">
        Average wellbeing per day:
        <input
          name="average-wellbeing-per-day"
          type="checkbox"
          className="source-checkbox"
          checked={isSelected}
          onChange={() => updateIsSelected(!isSelected)}
        />
      </label>
    </div>
  </div>
)

SelfReflect.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  updateIsSelected: PropTypes.func.isRequired
}

export default SelfReflect
