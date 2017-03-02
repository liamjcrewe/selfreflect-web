import React, { PropTypes } from 'react'

import { validClass, errorClass } from '../inputValidationClasses'
import validatePassword from './validator'

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
  const passwordLabel = label || 'Password'

  return (
    <div>
      <label htmlFor={passwordLabel}>{passwordLabel}</label>
      <div className="row u-full-width">
        <input
          className="eight columns"
          type="password"
          placeholder={passwordLabel}
          id={passwordLabel}
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
