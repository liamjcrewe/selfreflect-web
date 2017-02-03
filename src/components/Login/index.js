import React, { PropTypes } from 'react'

import LoginTitle from './LoginTitle'
import LoginForm from './LoginForm'

const Login = ({
  email,
  password,
  isLoading,
  isSubmitted,
  submitError,
  updateEmail,
  updatePassword,
  login
}) => (
  <div className="container">
    <LoginTitle />

    <LoginForm
      email={email}
      password={password}
      isLoading={isLoading}
      isSubmitted={isSubmitted}
      submitError={submitError}
      updateEmail={updateEmail}
      updatePassword={updatePassword}
      login={login}
    />
  </div>
)

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
  submitError: PropTypes.string.isRequired,
  updateEmail: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
}

export default Login
