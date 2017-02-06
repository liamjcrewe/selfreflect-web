import React, { PropTypes } from 'react'

const Question = ({ question, answer, onAnswerClick }) => (
  <div></div>
)

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.number.isRequired,
  onAnswerClick: PropTypes.func.isRequired
}

export default Question
