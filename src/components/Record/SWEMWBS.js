import React, { PropTypes } from 'react'

import { mapIndexed } from '../../util'
import questions from './questions'
import Question from './Question'

const SWEMWBS = ({
  scores,
  isLoading,
  isSubmitted,
  submitError,
  updateScore,
  resetState,
  submit
}) => (
  <div className="container">
    {mapIndexed((question, index) => (
      <Question
        key={index}
        question={question}
        answer={scores[index]}
        onAnswerClick={answer => updateScore(index, answer)}
      />
    ), questions)}

    <button className="" onClick={resetState}>
      Clear
    </button>
    <button className="button-primary" onClick={() => submit(scores)}>
      Submit
    </button>
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
