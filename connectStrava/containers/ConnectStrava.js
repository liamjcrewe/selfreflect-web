import { connect } from 'react-redux'

import ConnectStrava from '../components/ConnectStrava'

const mapStateToProps = state => {
  return {
    isLoading: state.connectStrava.isLoading,
    isSubmitted: state.connectStrava.isSubmitted,
    submitError: state.connectStrava.submitError
  }
}

export default connect(
  mapStateToProps
)(ConnectStrava)
