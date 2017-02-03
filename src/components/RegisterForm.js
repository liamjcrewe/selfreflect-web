import React, { PropTypes } from 'react'

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

const RegisterForm = ({
  email,
  password,
  confirm,
  serverResponse,
  updateEmail,
  updatePassword,
  updateConfirm,
  register
}) => (
  <form
    className="register-form"
    onSubmit={event => {
      event.preventDefault()

      register()
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
      <button
        className="register-button"
        onClick={() => {
          updateEmail('')
          updatePassword('')
          updateConfirm('')
        }}
      >
        Clear
      </button>

      <input className="button-primary register-button" type="submit" />
    </div>

    <div className="u-full-width register-server-response">
      {serverResponse}
    </div>
  </form>
)

RegisterForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirm: PropTypes.string.isRequired,
  serverResponse: PropTypes.string.isRequired,
  updateEmail: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
  updateConfirm: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
}

export default RegisterForm
