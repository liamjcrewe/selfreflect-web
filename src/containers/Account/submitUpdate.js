import { api } from '../../../config/api'

import { updateUser } from '../../ducks/user'
import {
  updateEditEmailIsLoading,
  updateEditEmailIsSubmitted,
  updateEditEmailSubmitError,
  updateNewEmail,
  updateEditEmailPassword,
  updateEditPasswordIsLoading,
  updateEditPasswordIsSubmitted,
  updateEditPasswordSubmitError,
  updateEditPasswordPassword,
  updateNewPassword,
  updateNewPasswordConfirm
} from '../../ducks/account'


export const submitUpdateEmail = (
  dispatch,
  userId,
  token,
  newEmail,
  password,
  twitter_username
) => {
  dispatch(updateEditEmailIsLoading(true))
  dispatch(updateEditEmailIsSubmitted(true))

  // Make sure we do not keep old submit error messages
  dispatch(updateEditEmailSubmitError(''))

  return fetch(api + '/v1/users/' + userId, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({
      'email': newEmail,
      'oldPassword': password,
      'newPassword': password,
      twitter_username
    })
  })
    .then(response => {
      // Invalid email or password
      if (response.status === 401) {
        return response.json()
          .then(json => {
            dispatch(updateEditEmailIsLoading(false))

            dispatch(updateEditEmailSubmitError(json.message))
          })
      }

      // Some error
      if (response.status !== 200) {
        return response.json()
          .then(json => {
            dispatch(updateEditEmailIsLoading(false))

            dispatch(updateEditEmailSubmitError(json.error))
          })
      }

      // Success
      return response.json()
        .then(json => {
          dispatch(updateUser({
            id: json.id,
            email: json.email,
            twitter_username: json.twitter_username
          }))

          dispatch(updateNewEmail(''))
          dispatch(updateEditEmailPassword(''))

          dispatch(updateEditEmailIsLoading(false))
        })
    })
    .catch(_ => {
      dispatch(updateEditEmailSubmitError(
        'Something went wrong. Please try again later.'
      ))

      return dispatch(updateEditEmailIsLoading(false))
    })
}

export const submitUpdatePassword = (
  dispatch,
  userId,
  token,
  email,
  password,
  newPassword,
  twitter_username
) => {
  dispatch(updateEditPasswordIsLoading(true))
  dispatch(updateEditPasswordIsSubmitted(true))

  // Make sure we do not keep old submit error messages
  dispatch(updateEditPasswordSubmitError(''))

  return fetch(api + '/v1/users/' + userId, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({
      'email': email,
      'oldPassword': password,
      'newPassword': newPassword,
      twitter_username
    })
  })
    .then(response => {
      // Invalid email or password
      if (response.status === 401) {
        return response.json()
          .then(json => {
            dispatch(updateEditPasswordSubmitError(json.message))

            dispatch(updateEditPasswordIsLoading(false))
          })
      }

      // Some error
      if (response.status !== 200) {
        return response.json()
          .then(json => {
            dispatch(updateEditPasswordIsLoading(false))

            dispatch(updateEditPasswordSubmitError(json.error))
          })
      }

      // Success
      return response.json()
        .then(json => {
          dispatch(updateUser({
            id: json.id,
            email: json.email,
            twitter_username: json.twitter_username
          }))

          dispatch(updateEditPasswordPassword(''))
          dispatch(updateNewPassword(''))
          dispatch(updateNewPasswordConfirm(''))

          dispatch(updateEditPasswordIsLoading(false))
        })
    })
    .catch(_ => {
      dispatch(updateEditPasswordSubmitError(
        'Something went wrong. Please try again later.'
      ))

      return dispatch(updateEditPasswordIsLoading(false))
    })
}

export const submitUpdateTwitterUsername = (
  dispatch,
  userId,
  token,
  username
) => {
  console.log(userId)
  console.log(token)
  console.log(username)
}
