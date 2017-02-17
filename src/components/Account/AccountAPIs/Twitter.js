import React, { PropTypes } from 'react'

import TwitterUsernameInput from '../../Form/Inputs/TwitterUsername'
import validateUsername from '../../Form/Inputs/TwitterUsername/validator'
import SubmitMessage from '../../Form/SubmitMessage'

const allInputsValid = username => {
  return username && validateUsername(username)
}

const Twitter = ({
  userId,
  token,
  username,
  isLoading,
  isSubmitted,
  submitError,
  updateUsername,
  saveUsername
}) => {
  return (
    <div className="api-connect-div twitter-div">
      <div className="api-connect-title">Twitter</div>

      <div className="twitter-content-div">
        <form
          className="account-edit-form"
          onSubmit={event => {
            event.preventDefault()

            if (!allInputsValid(username)) {
              return
            }

            saveUsername(userId, token, username)
          }}
        >
          <TwitterUsernameInput
            username={username}
            updateUsername={updateUsername}
            label="Username"
          />

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
  saveUsername: PropTypes.func.isRequired
}

export default Twitter
