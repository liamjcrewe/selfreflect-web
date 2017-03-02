import { connect } from 'react-redux'

import {
  updateIsLoading,
  updateIsSubmitted,
  updateSubmitError
} from '../ducks/connectStrava'

import ConnectStrava from '../components/ConnectStrava'

const mapStateToProps = state => {
  return {
    isLoading: state.connectStrava.isLoading,
    isSubmitted: state.connectStrava.isSubmitted,
    submitError: state.connectStrava.submitError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateIsLoading: isLoading => dispatch(updateIsLoading(isLoading)),
    updateIsSubmitted: isSubmitted => dispatch(updateIsSubmitted(isSubmitted)),
    updateSubmitError: submitError => dispatch(updateSubmitError(submitError))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectStrava)
