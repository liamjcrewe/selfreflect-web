// Constants
const UPDATE_SELECTED_EDIT_TAB = 'UPDATE_SELECTED_EDIT_TAB'
const UPDATE_NEW_EMAIL = 'UPDATE_NEW_EMAIL'

const UPDATE_EDIT_EMAIL_PASSWORD = 'UPDATE_EDIT_EMAIL_PASSWORD'
const UPDATE_EDIT_PASSWORD_PASSWORD = 'UPDATE_EDIT_PASSWORD_PASSWORD'

const UPDATE_NEW_PASSWORD = 'UPDATE_NEW_PASSWORD'
const UPDATE_NEW_PASSWORD_CONFIRM = 'UPDATE_NEW_PASSWORD_CONFIRM'

const UPDATE_EDIT_EMAIL_IS_LOADING = 'UPDATE_EDIT_EMAIL_IS_LOADING'
const UPDATE_EDIT_PASSWORD_IS_LOADING = 'UPDATE_EDIT_PASSWORD_IS_LOADING'

const UPDATE_EDIT_EMAIL_IS_SUBMITTED = 'UPDATE_EDIT_EMAIL_IS_SUBMITTED'
const UPDATE_EDIT_PASSWORD_IS_SUBMITTED = 'UPDATE_EDIT_PASSWORD_IS_SUBMITTED'

const UPDATE_EDIT_EMAIL_SUBMIT_ERROR = 'UPDATE_EDIT_EMAIL_SUBMIT_ERROR'
const UPDATE_EDIT_PASSWORD_SUBMIT_ERROR = 'UPDATE_EDIT_PASSWORD_SUBMIT_ERROR'

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

export const updateEditEmailIsLoading = editEmailIsLoading => {
  return {
    type: UPDATE_EDIT_EMAIL_IS_LOADING,
    editEmailIsLoading
  }
}

export const updateEditPasswordIsLoading = editPasswordIsLoading => {
  return {
    type: UPDATE_EDIT_PASSWORD_IS_LOADING,
    editPasswordIsLoading
  }
}

export const updateEditEmailIsSubmitted = editEmailIsSubmitted => {
  return {
    type: UPDATE_EDIT_EMAIL_IS_SUBMITTED,
    editEmailIsSubmitted
  }
}

export const updateEditPasswordIsSubmitted = editPasswordIsSubmitted => {
  return {
    type: UPDATE_EDIT_PASSWORD_IS_SUBMITTED,
    editPasswordIsSubmitted
  }
}

export const updateEditEmailSubmitError = editEmailSubmitError => {
  return {
    type: UPDATE_EDIT_EMAIL_SUBMIT_ERROR,
    editEmailSubmitError
  }
}

export const updateEditPasswordSubmitError = editPasswordSubmitError => {
  return {
    type: UPDATE_EDIT_PASSWORD_SUBMIT_ERROR,
    editPasswordSubmitError
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
  editEmailIsLoading: false,
  editPasswordIsLoading: false,
  editEmailIsSubmitted: false,
  editPasswordIsSubmitted: false,
  editEmailSubmitError: '',
  editPasswordSubmitError: ''
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
    case UPDATE_EDIT_EMAIL_IS_LOADING:
      return {
        ...state,
        editEmailIsLoading: action.editEmailIsLoading
      }
    case UPDATE_EDIT_PASSWORD_IS_LOADING:
      return {
        ...state,
        editPasswordIsLoading: action.editPasswordIsLoading
      }
    case UPDATE_EDIT_EMAIL_IS_SUBMITTED:
      return {
        ...state,
        editEmailIsSubmitted: action.editEmailIsSubmitted
      }
    case UPDATE_EDIT_PASSWORD_IS_SUBMITTED:
      return {
        ...state,
        editPasswordIsSubmitted: action.editPasswordIsSubmitted
      }
    case UPDATE_EDIT_EMAIL_SUBMIT_ERROR:
      return {
        ...state,
        editEmailSubmitError: action.editEmailSubmitError
      }
    case UPDATE_EDIT_PASSWORD_SUBMIT_ERROR:
      return {
        ...state,
        editPasswordSubmitError: action.editPasswordSubmitError
      }
    default:
      return state
  }
}
