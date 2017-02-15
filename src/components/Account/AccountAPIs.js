import React from 'react'

import Twitter from '../../containers/Account/Twitter'
import ComingSoon from './ComingSoon'
import AccountAPIsTitle from './AccountAPIsTitle'

export default () => {
  return (
    <div className="container">
      <AccountAPIsTitle />
      <Twitter />
      <ComingSoon />
      <ComingSoon />
      <ComingSoon />
    </div>
  )
}
