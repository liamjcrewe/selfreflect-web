import { connect } from 'react-redux'

import EditPassword from '../../components/Account/EditPassword'
import submitUpdate from './submitUpdate'
import {
  updateEditPasswordPassword,
  updateNewPassword,
  updateNewPasswordConfirm
} from '../../ducks/account'

const mapStateToProps = state => {
  return {
    userId: state.user.id,
    token: state.token.value,
    email: state.user.email,
    password: state.account.editPasswordPassword,
    newPassword: state.account.newPassword,
    newPasswordConfirm: state.account.newPasswordConfirm,
    isLoading: state.account.isLoading,
    isSubmitted: state.account.isSubmitted,
    submitError: state.account.submitError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updatePassword: password => {
      dispatch(updateEditPasswordPassword(password))
    },
    updateNewPassword: newPassword => {
      dispatch(updateNewPassword(newPassword))
    },
    updateNewPasswordConfirm: newPassword => {
      dispatch(updateNewPasswordConfirm(newPassword))
    },
    submitUpdate: (userId, token, email, password, newPassword) => {
      submitUpdate(dispatch, userId, token, email, password, newPassword)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPassword)
