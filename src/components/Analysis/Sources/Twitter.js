import React, { PropTypes } from 'react'

const Twitter = ({ isSelected, updateIsSelected }) => (
  <div className="four columns">
    <div className="source-title">
      Twitter
    </div>
    <div className="source-checkboxes">
      <label className="source-label">
        Number of tweets per day:
        <input
          name="num-tweets-per-day"
          type="checkbox"
          className="source-checkbox"
          checked={isSelected}
          onChange={() => updateIsSelected(!isSelected)}
        />
      </label>
    </div>
  </div>
)

Twitter.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  updateIsSelected: PropTypes.func.isRequired
}

export default Twitter
