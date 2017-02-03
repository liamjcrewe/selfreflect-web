require('es6-promise').polyfill()
require('isomorphic-fetch')

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './ducks'
import App from './components/App'

let store = createStore(reducers)

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('main')
)
