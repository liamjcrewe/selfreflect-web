import { connect } from 'react-redux'

import { updateSelectedTab } from '../../ducks/tab'
import Home from '../../components/Home'
import validateToken from '../../validateToken'

const mapStateToProps = state => {
  return {
    isLoggedIn: validateToken(state.user.token)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateSelectedTab: newTab => { dispatch(updateSelectedTab(newTab)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
