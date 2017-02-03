// Constants
const UPDATE_EMAIL = 'UPDATE_EMAIL'
const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
const UPDATE_CONFIRM = 'UPDATE_CONFIRM'
const UPDATE_SERVER_RESPONSE = 'UPDATE_SERVER_RESPONSE'

// Actions
export const updateEmail = email => {
  return {
    type: UPDATE_EMAIL,
    email
  }
}

export const updatePassword = password => {
  return {
    type: UPDATE_PASSWORD,
    password
  }
}

export const updateConfirm = confirm => {
  return {
    type: UPDATE_CONFIRM,
    confirm
  }
}

export const updateServerResponse = serverResponse => {
  return {
    type: UPDATE_SERVER_RESPONSE,
    serverResponse
  }
}

// Reducer
const initialState = {
  email: '',
  password: '',
  confirm: '',
  serverResponse: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.email
      }
    case UPDATE_PASSWORD:
      return {
        ...state,
        password: action.password
      }
    case UPDATE_CONFIRM:
      return {
        ...state,
        confirm: action.confirm
      }
    case UPDATE_SERVER_RESPONSE:
      return {
        ...state,
        serverResponse: action.serverResponse
      }
    default:
      return state
  }
}
