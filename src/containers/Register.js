import { connect } from 'react-redux'
import { api } from '../../config/api'

import Register from '../components/Register'
import {
  updateEmail,
  updatePassword,
  updateConfirm,
  updateServerResponse
} from '../ducks/register'

const register = (dispatch, email, password) => {
  //api post

  // dispatch(updateServerResponse(response))
}

const mapStateToProps = state => {
  return {
    email: state.register.email,
    password: state.register.password,
    confirm: state.register.confirm,
    serverResponse: state.register.serverResponse
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateEmail: email => { dispatch(updateEmail(email)) },
    updatePassword: password => { dispatch(updatePassword(password)) },
    updateConfirm: confirm => { dispatch(updateConfirm(confirm)) },
    register: (email, password) => { register(dispatch, email, password) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
