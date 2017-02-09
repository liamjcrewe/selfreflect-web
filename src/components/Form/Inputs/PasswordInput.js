import React, { PropTypes } from 'react'

import { validClass, errorClass } from './inputValidationClasses'
import validatePassword from './validators/password'

const getPasswordValidatonMessage = password => {
  if (!password) {
    return '*Required'
  }

  if (password.length < 8) {
    return 'Must be 8 or more characters'
  }

  return '✓'
}

const PasswordInput = ({ password, updatePassword, label }) => {
  const isValidPassword = validatePassword(password)

  return (
    <div>
      <label htmlFor="password">{label || 'Password'}</label>
      <div className="row u-full-width">
        <input
          className="eight columns"
          type="password"
          placeholder={label || 'Password'}
          id="password"
          value={password}
          onChange={event => updatePassword(event.target.value)}
        />
        <div className={isValidPassword ? validClass : errorClass}>
          {getPasswordValidatonMessage(password)}
        </div>
      </div>
    </div>
  )
}

PasswordInput.propTypes = {
  password: PropTypes.string.isRequired,
  updatePassword: PropTypes.func.isRequired,
  label: PropTypes.string
}

export default PasswordInput
