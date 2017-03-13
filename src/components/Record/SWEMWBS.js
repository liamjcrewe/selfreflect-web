import React, { PropTypes } from 'react'

import { mapIndexed } from '../../util'
import questions from './questions'
import Question from './Question'
import SubmitMessage from '../Form/SubmitMessage'

const SWEMWBS = ({
  userId,
  token,
  scores,
  isLoading,
  isSubmitted,
  submitError,
  updateScore,
  resetScores,
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

    <div className="u-full-width submit-message">
      <SubmitMessage
        isLoading={isLoading}
        isSubmitted={isSubmitted}
        submitError={submitError}
      />
    </div>

    <div className="u-full-width SWEMWBS-buttons-div">
      <button className="SWEMWBS-button" onClick={resetScores}>Clear</button>

      <button
        className="SWEMWBS-button button-primary"
        onClick={() => submit(userId, token, scores)}
      >
        Submit
      </button>
    </div>
  </div>
)

SWEMWBS.propTypes = {
  userId: PropTypes.number.isRequired,
  token: PropTypes.string.isRequired,
  scores: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  isLoading: PropTypes.bool.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
  submitError: PropTypes.string.isRequired,
  updateScore: PropTypes.func.isRequired,
  resetScores: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
}

export default SWEMWBS
