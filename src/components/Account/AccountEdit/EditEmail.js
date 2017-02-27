import React, { PropTypes } from 'react'

import validateEmail from '../../Form/Inputs/Email/validator'
import validatePassword from '../../Form/Inputs/Password/validator'

import EmailInput from '../../Form/Inputs/Email'
import PasswordInput from '../../Form/Inputs/Password'

import SubmitMessage from '../../Form/SubmitMessage'

const allInputsValid = (email, password) => {
  return validateEmail(email) && validatePassword(password)
}

const EditEmail = ({
  userId,
  token,
  email,
  newEmail,
  password,
  twitter_username,
  isLoading,
  isSubmitted,
  submitError,
  updateNewEmail,
  updatePassword,
  saveEmail
}) => {
  return (
    <form
      className="account-edit-form"
      onSubmit={event => {
        event.preventDefault()

        // Don't submit if already submitted, or if missing fields
        if (isLoading || !allInputsValid(email, password)) {
          return
        }

        saveEmail(userId, token, newEmail, password, twitter_username)
      }}
    >
      <EmailInput
        email={newEmail}
        updateEmail={updateNewEmail}
        label="New email"
      />

      <PasswordInput password={password} updatePassword={updatePassword} />

      <div className="u-full-width account-edit-buttons-div">
        <button
          className="account-edit-button"
          type="button"
          onClick={() => {
            updateNewEmail('')
            updatePassword('')
          }}
        >
          Clear
        </button>

        <input
          className="button-primary account-edit-button"
          type="submit"
          value="Save"
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
  )
}

EditEmail.propTypes = {
  userId: PropTypes.number.isRequired,
  token: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  newEmail: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  twitter_username: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
  submitError: PropTypes.string.isRequired,
  updateNewEmail: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
  saveEmail: PropTypes.func.isRequired
}

export default EditEmail
