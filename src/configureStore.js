import { createStore } from 'redux'
import { equals } from 'ramda'
import throttle from 'throttle-debounce/throttle'

import { loadState, persistState, clearPersistedState } from './localStorage'
import reducers from './ducks'
import refreshToken from './refreshToken'
import validateToken from './validateToken'
import fetchUser from './fetchUser'

export default () => {
  const persistedState = loadState()

  let store = createStore(reducers, persistedState)

  /*
   * Persist user and token in html web storage
   *
   * Can't throttle this unfortunately. If user logs out we have to clear
   * persisted state instantly, otherwise a quick refresh could result in the
   * user still being logged in.
   */
  store.subscribe(() => {
    const user = store.getState().user
    const token = store.getState().token

    // If no user id in new state, user has logged out, so clear persisted state
    if (!user.id) {
      return clearPersistedState()
    }

    if (!persistedState) {
      return persistState({ user, token })
    }

    // If nothing changed, do nothing
    if (equals(user, persistedState.user) &&
        equals(token, persistedState.token)) {
      return
    }

    persistState({ user, token })
  })

  /*
   * Refresh token if it is going to expire in less than an hour
   *
   * Throttled to max once every 60 seconds
   */
  store.subscribe(throttle(60000, () => {
    const token = store.getState().token
    const nowInSeconds = Math.floor(Date.now() / 1000)

    // If no token, or going to expire in more than an hour, do nothing
    if (!token.value || (token.exp - 3600 > nowInSeconds)) {
      return
    }

    // Else refresh token
    refreshToken(store.dispatch, token)
  }))

  /**
   * Update user information from server regularly
   *
   * Throttled to max once every 60 seconds (most of the time server and app
   * will be in sync, so do not want to fire this too often)
   */
  store.subscribe(throttle(60000, () => {
    const user = store.getState().user
    const token = store.getState().token

    // If not logged in, or if token invalid
    if (!user.id || !validateToken(token)) {
      return
    }

    fetchUser(store.dispatch, user.id, token.value)
  }))

  return store
}
