import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import appReducers from './reducers'
import App from './components/App'

let store = createStore(appReducers)

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('main')
)
