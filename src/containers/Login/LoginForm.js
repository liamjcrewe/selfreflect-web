import { connect } from 'react-redux'
import { api } from '../../../config/api'

import LoginForm from '../../components/Login/LoginForm'

import {
  updateEmail,
  updatePassword,
  updateIsLoading,
  updateIsSubmitted,
  updateSubmitError,
  resetLogin
} from '../../ducks/login'

import { updateId } from '../../ducks/user'
import { setToken } from '../../ducks/token'
import { setSelectedTab } from '../../ducks/tab'

const login = (dispatch, email, password) => {
  dispatch(updateIsLoading(true))
  dispatch(updateIsSubmitted(true))

  // Make sure we do not keep old submit error messages
  dispatch(updateSubmitError(''))

  return fetch(api + '/v1/tokens', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(response => {
      // Invalid email or password
      if (response.status === 401) {
        return response.json()
          .then(json => {
            dispatch(updateSubmitError(json.message))

            dispatch(updateIsLoading(false))
          })
      }

      // Some other error
      if (response.status !== 200) {
        return response.json()
          .then(json => {
            dispatch(updateSubmitError(json.error))

            dispatch(updateIsLoading(false))
          })
      }

      // Success
      return response.json()
        .then(json => {
          dispatch(updateId(json.id))

          dispatch(setToken({ value: json.token, exp: json.exp }))

          dispatch(setSelectedTab('guide'))

          dispatch(resetLogin())
        })
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
    email: state.login.email,
    password: state.login.password,
    isLoading: state.login.isLoading,
    isSubmitted: state.login.isSubmitted,
    submitError: state.login.submitError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateEmail: email => { dispatch(updateEmail(email)) },
    updatePassword: password => { dispatch(updatePassword(password)) },
    login: (email, password) => login(dispatch, email, password)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)
