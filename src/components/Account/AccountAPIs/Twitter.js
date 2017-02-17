import React, { PropTypes } from 'react'

import EmailInput from '../../Form/Inputs/EmailInput'
import SubmitMessage from '../../Form/SubmitMessage'

const allInputsValid = username => {
  return true
}

const Twitter = ({
  userId,
  token,
  username,
  isLoading,
  isSubmitted,
  submitError,
  updateUsername,
  submitUsername
}) => {
  return (
    <div className="api-connect-div twitter-div">
      <div className="api-connect-title">Twitter</div>
      <div className="twitter-content-div">
        <form className="account-edit-form">
          <EmailInput label="Username" />
          <div className="account-buttons-div">
            <input className="button-primary" type="submit" value="save" />
          </div>
          <div className="u-full-width submit-message">
            <SubmitMessage
            isLoading={isLoading}
            isSubmitted={isSubmitted}
            submitError={submitError}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

Twitter.propTypes = {
  userId: PropTypes.number.isRequired,
  token: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
  submitError: PropTypes.string.isRequired,
  updateUsername: PropTypes.func.isRequired,
  submitUsername: PropTypes.func.isRequired
}

export default Twitter
