import React, { PropTypes } from 'react'

import Home from '../containers/Home'
import Register from './Register'
import Login from './Login'
import Four0Four from './Four0Four'
import Record from './Record'

const getBody = selectedTab => {
  switch (selectedTab) {
    case 'home':
      return <Home />
    case 'login':
      return <Login />
    case 'register':
      return <Register />
    case 'guide':
      return <div>guide</div>
    case 'record':
      return <Record />
    case 'analysis':
      return <div>analysis</div>
    case 'account':
      return <div>account</div>
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
