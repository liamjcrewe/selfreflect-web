import { connect } from 'react-redux'
import { api } from '../../../config/api'

import Register from '../../components/Register'
import {
  updateEmail,
  updatePassword,
  updateConfirm,
  updateIsLoading,
  updateIsSubmitted,
  updateSubmitError,
  resetState
} from '../../ducks/register'

const register = (dispatch, email, password) => {
  dispatch(updateIsLoading(true))
  dispatch(updateIsSubmitted(true))

  // Make sure we do not keep old submit error messages
  dispatch(updateSubmitError(''))

  return fetch(api + '/v1/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(response => {
      if (response.status !== 201) {
        return response.json()
          .then(json => {
            dispatch(updateSubmitError(json.error))

            dispatch(updateIsLoading(false))
          })
      }

      // Success
      return dispatch(updateIsLoading(false))
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
    email: state.register.email,
    password: state.register.password,
    confirm: state.register.confirm,
    isLoading: state.register.isLoading,
    isSubmitted: state.register.isSubmitted,
    submitError: state.register.submitError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateEmail: email => { dispatch(updateEmail(email)) },
    updatePassword: password => { dispatch(updatePassword(password)) },
    updateConfirm: confirm => { dispatch(updateConfirm(confirm)) },
    resetForm: () => { dispatch(resetState()) },
    register: (email, password) => register(dispatch, email, password)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
