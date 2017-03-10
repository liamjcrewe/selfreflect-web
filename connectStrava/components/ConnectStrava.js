import React, { PropTypes } from 'react'
import { parse } from 'query-string'

const getContent = (
  isLoading,
  isSubmitted,
  submitError,
  postToken,
  updateIsLoading,
  updateIsSubmitted,
  updateSubmitError
) => {
  const getParams = parse(window.location.search)
  const state = JSON.parse(getParams.state)

  if (isLoading) {
    return 'Contacting SelfReflect servers...'
  }

  if (submitError) {
    return 'Oops. Something went wrong. Error: ' + submitError
  }

  if (isSubmitted) {
    return 'Success! You may now close this and head back to SelfReflect.'
  }

  if (getParams.error) {
    return 'Failed to connect your Strava account.'
  }

  if (!getParams.code || !getParams.state) {
    return 'Oops. Something went wrong.'
  }

  postToken(
    getParams.code,
    state.userId,
    state.tokenValue,
    updateIsLoading,
    updateIsSubmitted,
    updateSubmitError
  )

  return 'Loading...'
}

const ConnectStrava = ({
  isLoading,
  isSubmitted,
  submitError,
  postToken,
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
        postToken,
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
  postToken: PropTypes.func.isRequired,
  updateIsLoading: PropTypes.func.isRequired,
  updateIsSubmitted: PropTypes.func.isRequired,
  updateSubmitError: PropTypes.func.isRequired
}

export default ConnectStrava
