require('es6-promise').polyfill()
require('isomorphic-fetch')

import React from 'react'
import { createStore } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import reducers from './ducks'
import ConnectStrava from './containers/ConnectStrava'

const store = createStore(reducers)

render(
  <Provider store={ store }>
    <ConnectStrava />
  </Provider>,
  document.getElementById('main')
)
