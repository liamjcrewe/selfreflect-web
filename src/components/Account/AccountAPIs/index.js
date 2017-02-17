import React from 'react'

import Twitter from '../../../containers/Account/AccountAPIs/Twitter'
import ComingSoon from './ComingSoon'

export default () => {
  return (
    <div className="container">
      <div className="account-apis-title">
        Connect existing apps
      </div>
      <Twitter />
      <ComingSoon />
      <ComingSoon />
      <ComingSoon />
    </div>
  )
}
