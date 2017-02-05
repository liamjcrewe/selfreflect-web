import { createStore } from 'redux'
import { equals } from 'ramda'
import throttle from 'throttle-debounce/throttle'

import { loadState, persistState, clearState } from './localStorage'
import reducers from '../ducks'
import refreshToken from './refreshToken'
import validateToken from '../validateToken'
import fetchUser from './fetchUser'

/**
 * Throttle to max once every 300 seconds (5 minutes), so we are not constantly
 * fetching from the server. Most of the time the server data and web app data
 * for a user are going to be in sync, so do not want to constantly update.
 */
const throttledFetchUser = throttle(300000, (dispatch, userId, token) => {
  fetchUser(dispatch, userId, token)
})

export default () => {
  const persistedState = loadState()

  const store = createStore(reducers, persistedState)

  /*
   * Persist user and token in html web storage
   *
   * Can't throttle this unfortunately. If user logs out we have to clear
   * persisted state instantly, otherwise a quick refresh could result in the
   * user still being logged in. Should be cheap to call this the majority of
   * the time though, as it checks if anything has changed before it persists
   * the state.
   */
  store.subscribe(() => {
    const user = store.getState().user
    const token = store.getState().token

    // If no user id in new state, user has logged out, so clear persisted state
    if (!user.id) {
      return clearState()
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
   * Throttled to max once every 300 seconds (5 minutes), as we really don't
   * need to check the token more often than this.
   */
  store.subscribe(throttle(300000, () => {
    const token = store.getState().token
    const nowInSeconds = Math.floor(Date.now() / 1000)

    // If no token, or if token going to expire in more than an hour, do nothing
    if (!token.value || (token.exp - 3600 > nowInSeconds)) {
      return
    }

    // Else refresh token
    refreshToken(store.dispatch, token)
  }))

  /**
   * Update user information from server regularly
   *
   * Can't throttle this every time, as user and token are set in two separate
   * actions. If we throttled, the first update (user) would happen, the guard
   * clause below would be true and user would not be fetched. Then, the second
   * update would happen (token), but again user would not be fetched as this
   * would be throttled.
   *
   * The user would then be left waiting for the throttled time before they
   * could do anything that needed their user details.
   *
   * Need to throttle somewhere to avoid constantly sending API requests, so do:
   *  - If this is a first time fetch, do not throttle
   *  - Else (i.e. if this is an update), call a throttled version of fetchUser
   */
  store.subscribe(() => {
    const user = store.getState().user
    const token = store.getState().token

    // If already loading, user not logged in, or if token invalid, do nothing
    if (user.isLoading || !user.id || !validateToken(token)) {
      return
    }

    // If first time fetching, do not throttle
    if (!user.email) {
      return fetchUser(store.dispatch, user.id, token)
    }

    throttledFetchUser(store.dispatch, user.id, token)
  })

  return store
}
