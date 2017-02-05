import { connect } from 'react-redux'

import { setSelectedTab } from '../../ducks/tab'
import HomeButtons from '../../components/Home/HomeButtons'

const mapDispatchToProps = dispatch => {
  return {
    onLoginClick: () => { dispatch(setSelectedTab('login')) },
    onRegisterClick: () => { dispatch(setSelectedTab('register')) }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(HomeButtons)
