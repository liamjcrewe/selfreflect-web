import React from 'react'

import SourcesTitle from './SourcesTitle'
import Sources from './Sources'
import GenerateButton from '../../containers/Analysis/GenerateButton'
import Graph from '../../containers/Analysis/Graph'

export default () => (
  <div>
    <SourcesTitle />
    <Sources />
    <GenerateButton />
    <Graph />
  </div>
)
