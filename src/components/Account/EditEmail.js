import React, { PropTypes } from 'react'

import validateEmail from '../Form/Inputs/validators/email'
import validatePassword from '../Form/Inputs/validators/password'

import EmailInput from '../Form/Inputs/EmailInput'
import PasswordInput from '../Form/Inputs/PasswordInput'

import SubmitMessage from '../Form/SubmitMessage'

const allInputsValid = (email, password) => {
  return validateEmail(email) && validatePassword(password)
}

const EditEmail = ({
  userId,
  token,
  email,
  newEmail,
  password,
  isLoading,
  isSubmitted,
  submitError,
  updateNewEmail,
  updatePassword,
  submitUpdate
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

        submitUpdate(userId, token, newEmail, password)
      }}
    >
      <EmailInput email={newEmail} updateEmail={updateNewEmail} />

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
  isLoading: PropTypes.bool.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
  submitError: PropTypes.string.isRequired,
  updateNewEmail: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
  submitUpdate: PropTypes.func.isRequired
}

export default EditEmail
