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

/*
 * Persist user in html web storage
 *
 * Throttled to max once every 3 seconds
 */
store.subscribe(throttle(3000, () => {
  const user = store.getState().user

  if (!persistedState) {
    return persistState({ user })
  }

  if (equals(user, persistedState.user)) {
    return
  }

  persistState({ user })
}))

/*
 * Refresh token if it is going to expire in less than an hour
 *
 * Throttled to max once every 60 seconds
 */
store.subscribe(throttle(60000, () => {
  const token = store.getState().user.token
  const nowInSeconds = Math.floor(Date.now() / 1000)

  // If no token, or going to expire in more than an hour, do nothing
  if (!token.value || (token.exp - 3600 > nowInSeconds)) {
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
