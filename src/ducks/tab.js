// Constants
const SET_SELECTED_TAB = 'SET_SELECTED_TAB'

// Actions
export const setSelectedTab = selectedTab => {
  return {
    type: SET_SELECTED_TAB,
    selectedTab
  }
}

// Reducer
const initialState = {
  selectedTab: 'home'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_TAB:
      return {
        selectedTab: action.selectedTab
      }
    default:
      return state
  }
}
