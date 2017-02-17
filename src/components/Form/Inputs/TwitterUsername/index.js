import React, { PropTypes } from 'react'

import { validClass, errorClass } from '../inputValidationClasses'
import validateTwitterUsername from './validator'

const getUsernameValidatonMessage = username => {
  if (!username) {
    return '*Required'
  }

  if (username.length > 15) {
    return 'Username cannot be longer than 15 characters'
  }

  if (!validateTwitterUsername(username)) {
    return 'Invalid characters (allowed: 0-9, a-z and _)'
  }

  return '✓'
}

const TwitterUsernameInput = ({ username, updateUsername, label }) => {
  const isValidUsername = validateTwitterUsername(username)
  const twitterUsernameLabel = label || 'Twitter username (not including @)'

  return (
    <div>
      <label htmlFor={twitterUsernameLabel}>{twitterUsernameLabel}</label>
      <div className="row u-full-width">
        <input
          type="text"
          className="eight columns"
          placeholder={twitterUsernameLabel}
          id={twitterUsernameLabel}
          value={username}
          onChange={event => updateUsername(event.target.value)}
        />
        <div className={isValidUsername ? validClass : errorClass}>
          {getUsernameValidatonMessage(username)}
        </div>
      </div>
    </div>
  )
}

TwitterUsernameInput.propTypes = {
  username: PropTypes.string.isRequired,
  updateUsername: PropTypes.func.isRequired,
  label: PropTypes.string
}

export default TwitterUsernameInput
