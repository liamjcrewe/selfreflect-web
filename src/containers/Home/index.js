import { connect } from 'react-redux'

import Home from '../../components/Home'
import validateToken from '../../validateToken'

const mapStateToProps = state => {
  return {
    isLoggedIn: validateToken(state.token)
  }
}

export default connect(
  mapStateToProps
)(Home)
