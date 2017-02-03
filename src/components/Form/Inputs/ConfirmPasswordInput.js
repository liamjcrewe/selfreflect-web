import React, { PropTypes } from 'react'

import { validClass, errorClass } from './inputValidationClasses'
import validateConfirmPassword from './validators/confirmPassword'

const getConfirmValidationMessage = (confirm, password) => {
  if (!confirm) {
    return '*Required'
  }

  if (confirm.length < 8) {
    return 'Must be 8 or more characters'
  }

  if (password.length < 8 || (confirm !== password)) {
    return 'Passwords do not match'
  }

  return '✓'
}

const ConfirmPasswordInput = ({ confirm, password, updateConfirm }) => {
  const isValidConfirm = validateConfirmPassword(password, confirm)

  return (
    <div>
      <label htmlFor="confirm">Confirm password</label>
      <div className="row u-full-width">
        <input
          className="eight columns"
          type="password"
          placeholder="Confirm password"
          id="confirm"
          value={confirm}
          onChange={event => updateConfirm(event.target.value)}
        />
        <div className={isValidConfirm ? validClass : errorClass}>
          {getConfirmValidationMessage(confirm, password)}
        </div>
      </div>
    </div>
  )
}


ConfirmPasswordInput.propTypes = {
  confirm: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  updateConfirm: PropTypes.func.isRequired
}

export default ConfirmPasswordInput
