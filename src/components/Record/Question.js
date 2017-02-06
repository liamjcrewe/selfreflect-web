import React, { PropTypes } from 'react'

import { mapIndexed } from '../../util'
import answers from './answers'

const Question = ({ question, currentScore, onAnswerClick }) => (
  <div>
    <div className="row question">{question}</div>
    <div className="answers">
      {mapIndexed((answer, index) => {
        const score = index + 1
        const className = currentScore === score
          ? 'answer answer-selected'
          : 'answer'

        return (
          <div
            key={index}
            className={className}
            onClick={() => onAnswerClick(score)}
          >
            <div className="answer-text">{answer}</div>
          </div>
        )
      }, answers)}
    </div>
  </div>
)

Question.propTypes = {
  question: PropTypes.string.isRequired,
  currentScore: PropTypes.number.isRequired,
  onAnswerClick: PropTypes.func.isRequired
}

export default Question
