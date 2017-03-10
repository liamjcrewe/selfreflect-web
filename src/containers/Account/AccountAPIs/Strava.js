import { connect } from 'react-redux'

import Strava from '../../../components/Account/AccountAPIs/Strava'

const mapStateToProps = state => {
  return {
    userId: state.user.id,
    tokenValue: state.token.value
  }
}

export default connect(
  mapStateToProps
)(Strava)
