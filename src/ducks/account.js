// Constants
const UPDATE_SELECTED_EDIT_TAB = 'UPDATE_SELECTED_EDIT_TAB'
const UPDATE_NEW_EMAIL = 'UPDATE_NEW_EMAIL'
const UPDATE_EDIT_EMAIL_PASSWORD = 'UPDATE_EDIT_EMAIL_PASSWORD'
const UPDATE_EDIT_PASSWORD_PASSWORD = 'UPDATE_EDIT_PASSWORD_PASSWORD'
const UPDATE_NEW_PASSWORD = 'UPDATE_NEW_PASSWORD'
const UPDATE_NEW_PASSWORD_CONFIRM = 'UPDATE_NEW_PASSWORD_CONFIRM'
const UPDATE_IS_LOADING = 'UPDATE_IS_LOADING'
const UPDATE_IS_SUBMITTED = 'UPDATE_IS_SUBMITTED'
const UPDATE_SUBMIT_ERROR = 'UPDATE_SUBMIT_ERROR'

// Actions
export const updateSelectedEditTab = selectedEditTab => {
  return {
    type: UPDATE_SELECTED_EDIT_TAB,
    selectedEditTab
  }
}

export const updateNewEmail = newEmail => {
  return {
    type: UPDATE_NEW_EMAIL,
    newEmail
  }
}

export const updateEditEmailPassword = editEmailPassword => {
  return {
    type: UPDATE_EDIT_EMAIL_PASSWORD,
    editEmailPassword
  }
}

export const updateEditPasswordPassword = editPasswordPassword => {
  return {
    type: UPDATE_EDIT_PASSWORD_PASSWORD,
    editPasswordPassword
  }
}

export const updateNewPassword = newPassword => {
  return {
    type: UPDATE_NEW_PASSWORD,
    newPassword
  }
}

export const updateNewPasswordConfirm = newPasswordConfirm => {
  return {
    type: UPDATE_NEW_PASSWORD_CONFIRM,
    newPasswordConfirm
  }
}

export const updateIsLoading = isLoading => {
  return {
    type: UPDATE_IS_LOADING,
    isLoading
  }
}

export const updateIsSubmitted = isSubmitted => {
  return {
    type: UPDATE_IS_SUBMITTED,
    isSubmitted
  }
}

export const updateSubmitError = submitError => {
  return {
    type: UPDATE_SUBMIT_ERROR,
    submitError
  }
}

// Reducer
const initialState = {
  selectedEditTab: '',
  newEmail: '',
  editEmailPassword: '',
  editPasswordPassword: '',
  newPassword: '',
  newPasswordConfirm: '',
  isLoading: false,
  isSubmitted: false,
  submitError: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_EDIT_TAB:
      return {
        ...state,
        selectedEditTab: action.selectedEditTab
      }
    case UPDATE_NEW_EMAIL:
      return {
        ...state,
        newEmail: action.newEmail
      }
    case UPDATE_EDIT_EMAIL_PASSWORD:
      return {
        ...state,
        editEmailPassword: action.editEmailPassword
      }
    case UPDATE_EDIT_PASSWORD_PASSWORD:
      return {
        ...state,
        editPasswordPassword: action.editPasswordPassword
      }
    case UPDATE_NEW_PASSWORD:
      return {
        ...state,
        newPassword: action.newPassword
      }
    case UPDATE_NEW_PASSWORD_CONFIRM:
      return {
        ...state,
        newPasswordConfirm: action.newPasswordConfirm
      }
    case UPDATE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case UPDATE_IS_SUBMITTED:
      return {
        ...state,
        isSubmitted: action.isSubmitted
      }
    case UPDATE_SUBMIT_ERROR:
      return {
        ...state,
        submitError: action.submitError
      }
    default:
      return state
  }
}
