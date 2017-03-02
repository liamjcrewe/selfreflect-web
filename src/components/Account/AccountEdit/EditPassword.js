import React, { PropTypes } from 'react'

import validatePassword from '../../Form/Inputs/Password/validator'
import validateConfirm from '../../Form/Inputs/ConfirmPassword/validator'

import PasswordInput from '../../Form/Inputs/Password'
import ConfirmPasswordInput from '../../Form/Inputs/ConfirmPassword'

import SubmitMessage from '../../Form/SubmitMessage'

const allInputsValid = (password, newPassword, newPasswordConfirm) => {
  return validatePassword(password)
    && validatePassword(newPassword)
    && validateConfirm(newPassword, newPasswordConfirm)
}

const EditEmail = ({
  userId,
  token,
  email,
  password,
  newPassword,
  newPasswordConfirm,
  twitter_username,
  isLoading,
  isSubmitted,
  submitError,
  updatePassword,
  updateNewPassword,
  updateNewPasswordConfirm,
  savePassword
}) => {
  return (
    <form
      className="account-edit-form"
      onSubmit={event => {
        event.preventDefault()

        // Don't submit if already submitted, or if missing fields
        if (isLoading
            || !allInputsValid(password, newPassword, newPasswordConfirm)) {
          return
        }

        savePassword(
          userId,
          token,
          email,
          password,
          newPassword,
          twitter_username
        )
      }}
    >
      <PasswordInput
        password={password}
        updatePassword={updatePassword}
        label="Old password"
      />

      <PasswordInput
        password={newPassword}
        updatePassword={updateNewPassword}
        label="New password"
      />

      <ConfirmPasswordInput
        confirm={newPasswordConfirm}
        password={newPassword}
        updateConfirm={updateNewPasswordConfirm}
        label="Confirm new password"
      />

      <div className="u-full-width account-edit-buttons-div">
        <button
          className="account-edit-button"
          type="button"
          onClick={() => {
            updatePassword('')
            updateNewPassword('')
            updateNewPasswordConfirm('')
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
  password: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  newPasswordConfirm: PropTypes.string.isRequired,
  twitter_username: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
  submitError: PropTypes.string.isRequired,
  updatePassword: PropTypes.func.isRequired,
  updateNewPassword: PropTypes.func.isRequired,
  updateNewPasswordConfirm: PropTypes.func.isRequired,
  savePassword: PropTypes.func.isRequired
}

export default EditEmail
