import React, { PropTypes } from 'react'

import { mapIndexed } from '../../util'
import questions from './questions'
import Question from './Question'
import SubmitMessage from '../Form/SubmitMessage'

const SWEMWBS = ({
  scores,
  isLoading,
  isSubmitted,
  submitError,
  updateScore,
  resetState,
  submit
}) => (
  <div>
    {mapIndexed((question, index) => (
      <Question
        key={index}
        question={question}
        currentScore={scores[index]}
        onAnswerClick={answer => updateScore(index, answer)}
      />
    ), questions)}


    <div className="u-full-width SWEMWBS-buttons-div">
      <button className="SWEMWBS-button" onClick={resetState}>Clear</button>

      <button
        className="SWEMWBS-button button-primary"
        onClick={() => submit(scores)}
      >
        Submit
      </button>
    </div>

    <div className="u-full-width submit-message">
      <SubmitMessage
        isLoading={isLoading}
        isSubmitted={isSubmitted}
        submitError={submitError}
      />
    </div>
  </div>
)

SWEMWBS.propTypes = {
  scores: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  isLoading: PropTypes.bool.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
  submitError: PropTypes.string.isRequired,
  updateScore: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
}

export default SWEMWBS
