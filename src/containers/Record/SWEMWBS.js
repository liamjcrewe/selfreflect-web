import { connect } from 'react-redux'
import { sum } from 'ramda'

import { updateScore, resetState } from '../../ducks/record'
import SWEMWBS from '../../components/Record/SWEMWBS'

const submit = (dispatch, scores) => {
  const wellbeing = sum(scores)

  console.log(scores)
  console.log(wellbeing)
  //
  // submit to server
  //
  // onFail: update error message
  //
  // onSuccess: reset scores
}

const mapStateToProps = state => {
  return {
    scores: state.record.scores,
    isLoading: state.record.isLoading,
    isSubmitted: state.record.isSubmitted,
    submitError: state.record.submitError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateScore: (key, score) => { dispatch(updateScore(key, score)) },
    resetState: () => { dispatch(resetState()) },
    submit: scores => submit(dispatch, scores)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SWEMWBS)
