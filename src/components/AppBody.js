import React, { PropTypes } from 'react'

import Home from '../containers/Home'
import Register from './Register'
import Login from './Login'
import Guide from './Guide'
import Four0Four from './Four0Four'
import Record from './Record'
import Analysis from './Analysis'
import Account from './Account'

const getBody = selectedTab => {
  switch (selectedTab) {
    case 'home':
      return <Home />
    case 'login':
      return <Login />
    case 'register':
      return <Register />
    case 'guide':
      return <Guide />
    case 'record':
      return <Record />
    case 'analysis':
      return <Analysis />
    case 'account':
      return <Account />
    default:
      return <Four0Four />
  }
}

const AppBody = ({ selectedTab }) => (
  <div>
    {getBody(selectedTab)}
  </div>
)

AppBody.propTypes = {
  selectedTab: PropTypes.string.isRequired
}

export default AppBody
