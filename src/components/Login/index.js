import React, { PropTypes } from 'react'

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
    <div className="login-title-div">
      <div className="login-title">Log in to SelfReflect</div>
      <br />
      Enter your email and password below to log in.
    </div>

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
