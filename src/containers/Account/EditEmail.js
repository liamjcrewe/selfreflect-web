import { connect } from 'react-redux'

import EditEmail from '../../components/Account/EditEmail'
import submitUpdate from './submitUpdate'
import { updateNewEmail, updatePassword } from '../../ducks/account'

const mapStateToProps = state => {
  return {
    userId: state.user.id,
    token: state.token.value,
    email: state.user.email,
    newEmail: state.account.newEmail,
    password: state.account.password,
    isLoading: state.account.isLoading,
    isSubmitted: state.account.isSubmitted,
    submitError: state.account.submitError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateNewEmail: newEmail => { dispatch(updateNewEmail(newEmail)) },
    updatePassword: password => { dispatch(updatePassword(password)) },
    submitUpdate: (userId, token, newEmail, password) => {
      submitUpdate(dispatch, userId, token, newEmail, password, password)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEmail)
