import React, { PropTypes } from 'react'

import validateEmail from './inputs/validators/email'
import validatePassword from './inputs/validators/password'
import validateConfirmPassword from './inputs/validators/confirmPassword'

import EmailInput from './inputs/EmailInput'
import PasswordInput from './inputs/PasswordInput'
import ConfirmPasswordInput from './inputs/ConfirmPasswordInput'

const clearButton = (updateEmail, updatePassword, updateConfirm) => (
  <button className="register-button" onClick={() => {
      updateEmail('')
      updatePassword('')
      updateConfirm('')
    }}
  >
    Clear
  </button>
)

const submitMessage = (isLoading, isSubmitted, submitError) => {
  if (isLoading) {
    return (
      <div>
        Contacting server...
      </div>
    )
  }

  if (isSubmitted) {
    return (
      <div className={submitError ? 'error' : 'success'}>
        {submitError || 'Success!'}
      </div>
    )
  }
}

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
      {submitMessage(isLoading, isSubmitted, submitError)}
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
