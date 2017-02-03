import React, { PropTypes } from 'react'

import RegisterForm from './RegisterForm'
import RegisterDisclaimer from  './RegisterDisclaimer'

const Register = ({
  email,
  password,
  confirm,
  serverResponse,
  updateEmail,
  updatePassword,
  updateConfirm,
  register
}) => (
  <div className="container">
    <RegisterDisclaimer />

    <RegisterForm
      email={email}
      password={password}
      confirm={confirm}
      serverResponse={serverResponse}
      updateEmail={updateEmail}
      updatePassword={updatePassword}
      updateConfirm={updateConfirm}
      register={register}
    />
  </div>
)

Register.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirm: PropTypes.string.isRequired,
  serverResponse: PropTypes.string.isRequired,
  updateEmail: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
  updateConfirm: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
}

export default Register
