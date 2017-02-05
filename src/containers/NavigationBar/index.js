import { connect } from 'react-redux'

import { updateSelectedTab } from '../../ducks/tab'
import { resetUser } from '../../ducks/user'
import { resetToken } from '../../ducks/token'
import NavigationBar from '../../components/NavigationBar'
import validateToken from '../../validateToken'

import Tabs from './tabs.js'

const mapStateToProps = state => {
  return {
    tabs: validateToken(state.token) ? Tabs.loggedIn : Tabs.loggedOut,
    selectedTab: state.tab.selectedTab
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogoClick: () => { dispatch(updateSelectedTab('home')) },
    updateSelectedTab: newTab => { dispatch(updateSelectedTab(newTab)) },
    logout: () => {
      dispatch(resetUser())
      dispatch(resetToken())

      dispatch(updateSelectedTab('home'))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar)
