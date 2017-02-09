import React, { PropTypes } from 'react'

import { validClass, errorClass } from './inputValidationClasses'
import validateEmail from './validators/email'

const getEmailValidationMessage = email => {
  if (!email) {
    return '*Required'
  }

  if (!validateEmail(email)) {
    return 'Invalid email format'
  }

  return '✓'
}

const EmailInput = ({ email, updateEmail, label }) => {
  const isValidEmail = validateEmail(email)

  return (
    <div>
      <label htmlFor="email">{label || 'Email'}</label>

      <div className="row u-full-width">
        <input
          className="eight columns"
          type="email"
          placeholder="me@example.com"
          id="email"
          value={email}
          onChange={event => updateEmail(event.target.value)}
        />
        <div className={isValidEmail ? validClass : errorClass}>
          {getEmailValidationMessage(email)}
        </div>
      </div>
    </div>
  )
}

EmailInput.propTypes = {
  email: PropTypes.string.isRequired,
  updateEmail: PropTypes.func.isRequired,
  label: PropTypes.string
}

export default EmailInput
