import React, { PropTypes } from 'react'

import { validClass, errorClass } from '../inputValidationClasses'
import validateTwitterUsername from './validator'

const getUsernameValidatonMessage = twitter_username => {
  if (!twitter_username) {
    return '*Required'
  }

  if (twitter_username.length > 15) {
    return 'Username cannot be longer than 15 characters'
  }

  if (!validateTwitterUsername(twitter_username)) {
    return 'Invalid characters (allowed: 0-9, a-z and _)'
  }

  return '✓'
}

const TwitterUsernameInput = ({
  twitter_username,
  updateTwitterUsername,
  label
}) => {
  const isValidUsername = validateTwitterUsername(twitter_username)
  const twitterUsernameLabel = label || 'Twitter username (not including \'@\')'

  return (
    <div>
      <label htmlFor={twitterUsernameLabel}>{twitterUsernameLabel}</label>
      <div className="row u-full-width">
        <input
          type="text"
          className="eight columns"
          placeholder={twitterUsernameLabel}
          id={twitterUsernameLabel}
          value={twitter_username}
          onChange={event => updateTwitterUsername(event.target.value)}
        />
        <div className={isValidUsername ? validClass : errorClass}>
          {getUsernameValidatonMessage(twitter_username)}
        </div>
      </div>
    </div>
  )
}

TwitterUsernameInput.propTypes = {
  username: PropTypes.string.isRequired,
  updateTwitterUsername: PropTypes.func.isRequired,
  label: PropTypes.string
}

export default TwitterUsernameInput
