import { connect } from 'react-redux'

import AccountEdit from '../../components/Account/AccountEdit'
import { updateSelectedEditTab } from '../../ducks/account'

const mapStateToProps = state => {
  return {
    selectedEditTab: state.account.selectedEditTab
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateSelectedEditTab: tab => dispatch(updateSelectedEditTab(tab))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountEdit)
