import { connect } from 'react-redux'

import ViewAccount from '../../components/Account/ViewAccount'

const mapStateToProps = state => {
  return {
    email: state.user.email
  }
}

export default connect(
  mapStateToProps
)(ViewAccount)
