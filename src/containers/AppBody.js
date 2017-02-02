import { connect } from 'react-redux'

import { updateSelectedTab } from '../ducks/tab'
import AppBody from '../components/AppBody'

const mapStateToProps = state => {
  return {
    selectedTab: state.tab.selectedTab
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBody)
