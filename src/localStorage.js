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
    const serializedToken = JSON.stringify(state)

    return localStorage.setItem('state', serializedToken)
  } catch (_) {
    return
  }
}
