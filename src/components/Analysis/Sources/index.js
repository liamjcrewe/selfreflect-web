import React from 'react'

import Wellbeing from '../../../containers/Analysis/Sources/Wellbeing'
import Twitter from '../../../containers/Analysis/Sources/Twitter'
import Strava from '../../../containers/Analysis/Sources/Strava'

export default () => (
  <div className="container">
    <Wellbeing />
    <Twitter />
    <Strava />
  </div>
)
