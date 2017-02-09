import { connect } from 'react-redux'
import { contains, sum } from 'ramda'

import { api } from '../../../config/api'

import {
  updateIsLoading,
  updateIsSubmitted,
  updateSubmitError,
  resetScores,
  updateScore
} from '../../ducks/record'
import { resetUser } from '../../ducks/user'
import { resetToken } from '../../ducks/token'
import { updateSelectedTab } from '../../ducks/tab'

import SWEMWBS from '../../components/Record/SWEMWBS'

const submit = (dispatch, userId, token, scores) => {
  // If any question unanswered, do nothing
  if (contains(0, scores)) {
    return dispatch(updateSubmitError('You must answer all questions'))
  }

  dispatch(updateIsLoading(true))
  dispatch(updateIsSubmitted(true))

  // Make sure we do not keep old submit error messages
  dispatch(updateSubmitError(''))

  return fetch(api + '/v1/users/' + userId + '/wellbeings', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({ wellbeing: sum(scores) })
  })
    .then(response => {
      // Invalid token, so should log user out
      if (response.status === 403) {
        dispatch(updateSubmitError('User not logged in.'))

        dispatch(updateIsLoading(false))

        dispatch(resetUser())
        dispatch(resetToken())

        dispatch(updateSelectedTab('login'))

        return
      }

      // Some other error
      if (response.status !== 201) {
        return response.json()
          .then(json => {
            dispatch(updateSubmitError(json.error))

            dispatch(updateIsLoading(false))
          })
      }

      // Success
      dispatch(updateIsLoading(false))

      return dispatch(resetScores())
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
    userId: state.user.id,
    token: state.token.value,
    scores: state.record.scores,
    isLoading: state.record.isLoading,
    isSubmitted: state.record.isSubmitted,
    submitError: state.record.submitError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateScore: (key, score) => { dispatch(updateScore(key, score)) },
    resetScores: () => { dispatch(resetScores()) },
    submit: (userId, token, scores) => submit(dispatch, userId, token, scores)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SWEMWBS)
