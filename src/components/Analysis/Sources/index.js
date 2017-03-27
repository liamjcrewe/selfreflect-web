import React from 'react'

import SelfReflect from '../../../containers/Analysis/Sources/SelfReflect'
import Twitter from '../../../containers/Analysis/Sources/Twitter'
import Strava from '../../../containers/Analysis/Sources/Strava'

export default () => (
  <div className="container">
    <SelfReflect />
    <Twitter />
    <Strava />
  </div>
)
