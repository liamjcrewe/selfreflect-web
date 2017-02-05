export const loadState = () => {
  try {
    const state = localStorage.getItem('state')

    if (state === null) {
      return
    }

    return JSON.parse(state)
  } catch (_) {
    return
  }
}

export const persistState = state => {
  try {
    const serializedState = JSON.stringify(state)

    return localStorage.setItem('state', serializedState)
  } catch (_) {
    return
  }
}

export const clearState = () => {
  try {
    return localStorage.clear()
  } catch (_) {
    return
  }
}
