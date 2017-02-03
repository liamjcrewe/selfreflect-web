import { connect } from 'react-redux'

import { updateSelectedTab } from '../../ducks/tab'
import Home from '../../components/Home'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    updateSelectedTab: newTab => { dispatch(updateSelectedTab(newTab)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
