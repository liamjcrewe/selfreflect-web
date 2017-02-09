// Constants
const UPDATE_SELECTED_EDIT_TAB = 'UPDATE_SELECTED_EDIT_TAB'

// Actions
export const updateSelectedEditTab = selectedEditTab => {
  return {
    type: UPDATE_SELECTED_EDIT_TAB,
    selectedEditTab
  }
}

// Reducer
const initialState = {
  selectedEditTab: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_EDIT_TAB:
      return {
        ...state,
        selectedEditTab: action.selectedEditTab
      }
    default:
      return state
  }
}
