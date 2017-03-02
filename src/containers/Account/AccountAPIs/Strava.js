import { connect } from 'react-redux'

import Strava from '../../../components/Account/AccountAPIs/Strava'

const mapStateToProps = state => {
  return {
    userId: state.user.id
  }
}

export default connect(
  mapStateToProps
)(Strava)
