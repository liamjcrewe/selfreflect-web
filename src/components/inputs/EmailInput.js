import React, { PropTypes } from 'react'

import { validClass, errorClass } from './inputValidationClasses'

// Simply: *@*.*
const simpleEmailRegex = /^(.+)@(.+)\.(.+)$/
const validateEmail = email => simpleEmailRegex.test(email)

const getEmailValidationMessage = email => {
  if (!email) {
    return '*Required'
  }

  if (!validateEmail(email)) {
    return 'Invalid email format'
  }

  return '✓'
}

const EmailInput = ({ email, updateEmail }) => {
  const isValidEmail = validateEmail(email)

  return (
    <div>
      <label htmlFor="email">Email</label>

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
  updateEmail: PropTypes.func.isRequired
}

export default EmailInput
