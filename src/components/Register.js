import React, { PropTypes } from 'react'

import RegisterForm from './RegisterForm'
import RegisterDisclaimer from  './RegisterDisclaimer'

const Register = ({
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
  <div className="container">
    <RegisterDisclaimer />

    <RegisterForm
      email={email}
      password={password}
      confirm={confirm}
      isLoading={isLoading}
      isSubmitted={isSubmitted}
      submitError={submitError}
      updateEmail={updateEmail}
      updatePassword={updatePassword}
      updateConfirm={updateConfirm}
      resetForm={resetForm}
      register={register}
    />
  </div>
)

Register.propTypes = {
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

export default Register
