import { connect } from 'react-redux'

import { updateSelectedTab } from '../ducks/tab'
import NavigationBar from '../components/NavigationBar'

import Tabs from '../tabs.js'

const mapStateToProps = state => {
  return {
    tabs: state.isLoggedIn ? Tabs.loggedIn : Tabs.loggedOut,
    selectedTab: state.tab.selectedTab
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
)(NavigationBar)
