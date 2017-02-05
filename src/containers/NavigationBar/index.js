import { connect } from 'react-redux'

import { setSelectedTab } from '../../ducks/tab'
import { resetUser } from '../../ducks/user'
import { resetToken } from '../../ducks/token'
import NavigationBar from '../../components/NavigationBar'
import validateToken from '../../validateToken'

import Tabs from './tabs.js'

const mapStateToProps = state => {
  return {
    tabs: validateToken(state.token) && (state.user.id !== 0)
      ? Tabs.loggedIn
      : Tabs.loggedOut,
    selectedTab: state.tab.selectedTab
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogoClick: () => { dispatch(setSelectedTab('home')) },
    setSelectedTab: newTab => { dispatch(setSelectedTab(newTab)) },
    logout: () => {
      dispatch(resetUser())
      dispatch(resetToken())

      dispatch(setSelectedTab('home'))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar)
