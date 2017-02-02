// Constants
const UPDATE_SELECTED_TAB = 'UPDATE_SELECTED_TAB'

// Actions
export const updateSelectedTab = newTab => {
  return {
    type: UPDATE_SELECTED_TAB,
    newTab
  }
}

// Reducer
const initialState = {
  selectedTab: 'home'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_TAB:
      return {
        ...state,
        selectedTab: action.newTab
      }
    default:
      return state
  }
}
