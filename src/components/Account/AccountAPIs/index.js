import React from 'react'

import Twitter from '../../../containers/Account/AccountAPIs/Twitter'
import Strava from '../../../containers/Account/AccountAPIs/Strava'
import ComingSoon from './ComingSoon'

export default () => {
  return (
    <div className="container">
      <div className="account-apis-title">
        Connect existing apps
      </div>
      <Twitter />
      <Strava />
      <ComingSoon />
    </div>
  )
}
