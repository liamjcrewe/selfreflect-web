import React, { PropTypes } from 'react'

const getInputValidationClass = isValid => (
  "four columns register-input-validation-" + (isValid ? "valid" : "error")
)

const emailInput = (email, updateEmail) => {
  const isValidEmail = email

  return (
    <div className="row u-full-width">
      <input
        className="eight columns"
        type="email"
        placeholder="me@example.com"
        id="email"
        value={email}
        onChange={event => updateEmail(event.target.value)}
      />
      <div className={getInputValidationClass(isValidEmail)}>
        {isValidEmail ? '✓' : '*Required'}
      </div>
    </div>
  )
}

const passwordInput = (password, updatePassword) => {
  return (
    <div className="row u-full-width">
      <input
        className="eight columns"
        type="password"
        placeholder="Password"
        id="password"
        value={password}
        onChange={event => updatePassword(event.target.value)}
      />
      <div className={getInputValidationClass(password)}>
        {password ? '✓' : '*Required'}
      </div>
    </div>
  )
}

const getConfirmValidationMessage = (confirm, password) => {
  if (!confirm) {
    return '*Required'
  }

  if (confirm !== password) {
    return 'Passwords do not match'
  }

  return '✓'
}

const confirmInput = (confirm, password, updateConfirm) => {
  const isValidConfirm = confirm && (confirm === password)

  return (
    <div className="row u-full-width">
      <input
        className="eight columns"
        type="password"
        placeholder="Confirm password"
        id="confirm"
        value={confirm}
        onChange={event => updateConfirm(event.target.value)}
      />
      <div className={getInputValidationClass(isValidConfirm)}>
        {getConfirmValidationMessage(confirm, password)}
      </div>
    </div>
  )
}

const clearButton = (updateEmail, updatePassword, updateConfirm) => (
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
)

const submitInput = (
  <input
    className="button-primary register-button"
    type="submit"
  />
)

const RegisterForm = ({
  email,
  password,
  confirm,
  serverResponse,
  register,
  updateEmail,
  updatePassword,
  updateConfirm
}) => (
  <form
    className="register-form"
    onSubmit={event => {
      event.preventDefault()

      register()
    }}
  >
    <label htmlFor="email">Email</label>
    {emailInput(email, updateEmail)}

    <label htmlFor="password">Password</label>
    {passwordInput(password, updatePassword)}

    <label htmlFor="confirm">Confirm password</label>
    {confirmInput(confirm, password, updateConfirm)}

    <div className="u-full-width register-buttons-div">
      {clearButton(updateEmail, updatePassword, updateConfirm)}
      {submitInput}
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
