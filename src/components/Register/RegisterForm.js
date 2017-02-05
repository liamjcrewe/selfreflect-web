import React, { PropTypes } from 'react'

import validateEmail from '../Form/Inputs/validators/email'
import validatePassword from '../Form/Inputs/validators/password'
import validateConfirmPassword from '../Form/Inputs/validators/confirmPassword'

import EmailInput from '../Form/Inputs/EmailInput'
import PasswordInput from '../Form/Inputs/PasswordInput'
import ConfirmPasswordInput from '../Form/Inputs/ConfirmPasswordInput'

import SubmitMessage from '../Form/SubmitMessage'

const allInputsValid = (email, password, confirm) => {
  return validateEmail(email)
    && validatePassword(password)
    && validateConfirmPassword(password, confirm)
}

const RegisterForm = ({
  email,
  password,
  confirm,
  isLoading,
  isSubmitted,
  submitError,
  updateEmail,
  updatePassword,
  updateConfirm,
  resetForm,
  register
}) => (
  <form
    className="register-form"
    onSubmit={event => {
      event.preventDefault()

      // Don't submit if already submitted, or if missing fields
      if (isLoading || !allInputsValid(email, password, confirm)) {
        return
      }

      register(email, password)
    }}
  >
    <EmailInput email={email} updateEmail={updateEmail} />

    <PasswordInput password={password} updatePassword={updatePassword} />

    <ConfirmPasswordInput
      confirm={confirm}
      password={password}
      updateConfirm={updateConfirm}
    />

    <div className="u-full-width register-buttons-div">
      <button type="button" className="register-button" onClick={resetForm}>
        Clear
      </button>

      <input className="button-primary register-button" type="submit" />
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

RegisterForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirm: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
  submitError: PropTypes.string.isRequired,
  updateEmail: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
  updateConfirm: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
}

export default RegisterForm
