require('es6-promise').polyfill()
require('isomorphic-fetch')

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './configureStore'
import App from './components/App'

const store = configureStore()

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('main')
)
