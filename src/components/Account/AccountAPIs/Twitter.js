import React, { PropTypes } from 'react'

import TwitterUsernameInput from '../../Form/Inputs/TwitterUsername'
import PasswordInput from '../../Form/Inputs/Password'
import validatePassword from '../../Form/Inputs/Password/validator'
import validateUsername from '../../Form/Inputs/TwitterUsername/validator'
import SubmitMessage from '../../Form/SubmitMessage'

const allInputsValid = (password, twitter_username) => {
  return validatePassword(password) && validateUsername(twitter_username)
}

const Twitter = ({
  userId,
  token,
  email,
  password,
  twitter_username,
  isLoading,
  isSubmitted,
  submitError,
  updatePassword,
  updateTwitterUsername,
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

            if (!allInputsValid(password, twitter_username)) {
              return
            }

            saveUsername(userId, token, email, password, twitter_username)
          }}
        >
          <TwitterUsernameInput
            twitter_username={twitter_username}
            updateTwitterUsername={updateTwitterUsername}
          />

          <PasswordInput password={password} updatePassword={updatePassword} />

          <div className="account-buttons-div">
            <button
              className="account-edit-button"
              type="button"
              onClick={() => {
                updatePassword('')
                updateTwitterUsername('')
              }}
            >
              Clear
            </button>

            <input
              className="button-primary account-edit-button"
              type="submit"
              value="save"
            />
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
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  twitter_username: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
  submitError: PropTypes.string.isRequired,
  updatePassword: PropTypes.func.isRequired,
  updateTwitterUsername: PropTypes.func.isRequired,
  saveUsername: PropTypes.func.isRequired
}

export default Twitter
