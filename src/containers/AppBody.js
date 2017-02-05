import { connect } from 'react-redux'

import AppBody from '../components/AppBody'

const mapStateToProps = state => {
  return {
    selectedTab: state.tab.selectedTab
  }
}

export default connect(
  mapStateToProps
)(AppBody)
