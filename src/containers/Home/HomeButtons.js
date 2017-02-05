import { connect } from 'react-redux'

import { updateSelectedTab } from '../../ducks/tab'
import HomeButtons from '../../components/Home/HomeButtons'

const mapStateToProps = state => {}

const mapDispatchToProps = dispatch => {
  return {
    onLoginClick: () => { dispatch(updateSelectedTab('login')) },
    onRegisterClick: () => { dispatch(updateSelectedTab('register')) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeButtons)
