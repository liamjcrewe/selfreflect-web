import { connect } from 'react-redux'

import Home from '../../components/Home'
import validateToken from '../../validateToken'

const mapStateToProps = state => {
  return {
    isLoggedIn: validateToken(state.user.token)
  }
}

const mapDispatchToProps = dispatch => {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
