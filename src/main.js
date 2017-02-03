require('es6-promise').polyfill()
require('isomorphic-fetch')

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { equals } from 'ramda'
import throttle from 'throttle-debounce/throttle'

import { loadState, persistState } from './localStorage'
import reducers from './ducks'
import App from './components/App'

const persistedState = loadState()

let store = createStore(reducers, persistedState)

store.subscribe(throttle(1000, () => {
  const user = store.getState().user

  if (!persistedState) {
    return persistState({ user })
  }

  if (equals(user, persistedState.user)) {
    return
  }

  persistState({ user })
}))

store.subscribe(throttle(1000, () => {
  const exp = store.getState().user.token.exp
  const now = Math.floor(Date.now() / 1000)

  // If going to expire in more than an hour, do nothing
  if (exp - 3600 > now) {
    return
  }

  // Else refresh token
}))

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('main')
)
