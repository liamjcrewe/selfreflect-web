import { connect } from 'react-redux'

import { updateSelectedTab } from '../../ducks/tab'
import { resetUserState } from '../../ducks/user'
import NavigationBar from '../../components/NavigationBar'
import validateToken from '../../validateToken'

import Tabs from './tabs.js'

const mapStateToProps = state => {
  return {
    tabs: validateToken(state.user.token) ? Tabs.loggedIn : Tabs.loggedOut,
    selectedTab: state.tab.selectedTab
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogoClick: () => { dispatch(updateSelectedTab('home')) },
    updateSelectedTab: newTab => { dispatch(updateSelectedTab(newTab)) },
    logout: () => {
      dispatch(resetUserState())

      dispatch(updateSelectedTab('home'))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar)
