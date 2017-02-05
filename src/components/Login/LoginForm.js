import React, { PropTypes } from 'react'

import validateEmail from '../Form/Inputs/validators/email'
import validatePassword from '../Form/Inputs/validators/password'

import EmailInput from '../Form/Inputs/EmailInput'
import PasswordInput from '../Form/Inputs/PasswordInput'

import SubmitMessage from '../Form/SubmitMessage'

const allInputsValid = (email, password) => {
  return validateEmail(email) && validatePassword(password)
}

const LoginForm = ({
  email,
  password,
  isLoading,
  isSubmitted,
  submitError,
  updateEmail,
  updatePassword,
  login
}) => (
  <form
    className="login-form"
    onSubmit={event => {
      event.preventDefault()

      // Don't submit if already submitted, or if missing fields
      if (isLoading || !allInputsValid(email, password)) {
        return
      }

      login(email, password)
    }}
  >
    <EmailInput email={email} updateEmail={updateEmail} />

    <PasswordInput password={password} updatePassword={updatePassword} />

    <div className="u-full-width login-buttons-div">
      <input
        className="button-primary login-button"
        type="submit"
        value="Log in"
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

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
  submitError: PropTypes.string.isRequired,
  updateEmail: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
}

export default LoginForm
