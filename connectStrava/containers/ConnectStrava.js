import { connect } from 'react-redux'

import { api } from '../../config/api'

import {
  updateIsLoading,
  updateIsSubmitted,
  updateSubmitError
} from '../ducks/connectStrava'

import ConnectStrava from '../components/ConnectStrava'

const postToken = dispatch => (
  code,
  userId,
  tokenValue,
  updateIsLoading,
  updateIsSubmitted,
  updateSubmitError
) => {
  dispatch(updateIsLoading(true))
  dispatch(updateIsSubmitted(true))

  // Make sure we do not keep old submit error messages
  dispatch(updateSubmitError(''))

  fetch(api + '/v1/users/' + userId + '/strava-credentials', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenValue
    },
    body: JSON.stringify({
      code
    })
  })
    .then(response => {
      // Invalid email or password
      if (response.status === 400) {
        return response.json()
          .then(json => {
            dispatch(updateIsLoading(false))

            dispatch(updateSubmitError(json.error))
          })
      }

      // Some error
      if (response.status !== 200) {
        return response.json()
          .then(json => {
            dispatch(updateIsLoading(false))

            dispatch(updateSubmitError(json.error))
          })
      }

      // Success
      dispatch(updateIsLoading(false))
    })
    .catch(_ => {
      dispatch(updateSubmitError(
        'Something went wrong. Please try again later.'
      ))

      return dispatch(updateIsLoading(false))
    })
}

const mapStateToProps = state => {
  return {
    isLoading: state.connectStrava.isLoading,
    isSubmitted: state.connectStrava.isSubmitted,
    submitError: state.connectStrava.submitError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postToken: postToken(dispatch),
    updateIsLoading: isLoading => dispatch(updateIsLoading(isLoading)),
    updateIsSubmitted: isSubmitted => dispatch(updateIsSubmitted(isSubmitted)),
    updateSubmitError: submitError => dispatch(updateSubmitError(submitError))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectStrava)
