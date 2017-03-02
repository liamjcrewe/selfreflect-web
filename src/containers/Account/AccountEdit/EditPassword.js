import { connect } from 'react-redux'

import EditPassword from '../../../components/Account/AccountEdit/EditPassword'
import { submitUpdatePassword } from '../submitUpdate'
import {
  updateEditPasswordPassword,
  updateNewPassword,
  updateNewPasswordConfirm
} from '../../../ducks/account'

const mapStateToProps = state => {
  return {
    userId: state.user.id,
    token: state.token.value,
    email: state.user.email,
    password: state.account.editPasswordPassword,
    newPassword: state.account.newPassword,
    newPasswordConfirm: state.account.newPasswordConfirm,
    twitter_username: state.user.twitter_username,
    isLoading: state.account.editPasswordIsLoading,
    isSubmitted: state.account.editPasswordIsSubmitted,
    submitError: state.account.editPasswordSubmitError
  }
}

const savePassword = dispatch =>
  (userId, token, email, password, newPassword, twitter_username) => {
    submitUpdatePassword(
      dispatch,
      userId,
      token,
      email,
      password,
      newPassword,
      twitter_username
    )
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
    savePassword: savePassword(dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPassword)
