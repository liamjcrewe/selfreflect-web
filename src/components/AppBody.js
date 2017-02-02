import React, { PropTypes } from 'react'

import Home from '../containers/Home'

const getBody = selectedTab => {
  switch (selectedTab) {
    case 'home':
      return <Home />
    case 'login':
      return <div>login</div>
    case 'register':
      return <div>register</div>
    case 'record':
      return <div>record</div>
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