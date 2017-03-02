import React, { PropTypes } from 'react'
import { parse } from 'query-string'

const postToken = (code, userId) => {
  console.log(code)
  console.log(userId)
}

const getContent = ({
  isLoading,
  isSubmitted,
  submitError,
  updateIsLoading,
  updateIsSubmitted,
  updateSubmitError
}) => {
  const queryObject = parse(window.location.search)

  if (isLoading) {
    return 'Contacting SelfReflect servers...'
  }

  if (submitError) {
    return 'Oops. Something went wrong. Error: {submitError}.'
  }

  if (isSubmitted) {
    return 'Success! You may now close this and head back to SelfReflect.'
  }

  if (queryObject.error) {
    return 'Failed to connect your Strava account.'
  }

  if (!queryObject.code || !queryObject.state) {
    return 'Oops. Something went wrong.'
  }

  postToken(queryObject.code, queryObject.state)

  return 'Loading...'
}

const ConnectStrava = ({
  isLoading,
  isSubmitted,
  submitError,
  updateIsLoading,
  updateIsSubmitted,
  updateSubmitError
}) => {
  return (
    <div className="connect-strava">
      {getContent(
        isLoading,
        isSubmitted,
        submitError,
        updateIsLoading,
        updateIsSubmitted,
        updateSubmitError
      )}
    </div>
  )
}

ConnectStrava.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
  submitError: PropTypes.string.isRequired,
  updateIsLoading: PropTypes.func.isRequired,
  updateIsSubmitted: PropTypes.func.isRequired,
  updateSubmitError: PropTypes.func.isRequired
}

export default ConnectStrava
