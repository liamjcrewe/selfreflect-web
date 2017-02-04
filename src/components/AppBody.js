import React, { PropTypes } from 'react'

import Home from '../containers/Home'
import Register from '../containers/Register'
import Login from '../containers/Login'

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
      return <div>record</div>
    case 'analysis':
      return <div>analysis</div>
    case 'account':
      return <div>account</div>
    default:
      return <div>404</div>
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
