import React, { PropTypes } from 'react'

const SubmitMessage = ({ isLoading, isSubmitted, submitError }) => {
  if (isLoading) {
    return <div>Contacting server...</div>
  }

  if (isSubmitted) {
    return (
      <div className={submitError ? 'error' : 'success'}>
        {submitError || 'Success!'}
      </div>
    )
  }

  return <div></div>
}

SubmitMessage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
  submitError: PropTypes.string.isRequired
}

export default SubmitMessage
