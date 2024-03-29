import { connect } from 'react-redux'

import EditEmail from '../../../components/Account/AccountEdit/EditEmail'
import { submitUpdateEmail } from '../submitUpdate'
import { updateNewEmail, updateEditEmailPassword } from '../../../ducks/account'

const mapStateToProps = state => {
  return {
    userId: state.user.id,
    token: state.token.value,
    email: state.user.email,
    newEmail: state.account.newEmail,
    password: state.account.editEmailPassword,
    twitter_username: state.user.twitter_username,
    isLoading: state.account.editEmailIsLoading,
    isSubmitted: state.account.editEmailIsSubmitted,
    submitError: state.account.editEmailSubmitError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateNewEmail: newEmail => dispatch(updateNewEmail(newEmail)),
    updatePassword: password => dispatch(updateEditEmailPassword(password)),
    saveEmail: (userId, token, newEmail, password, twitter_username) => {
      submitUpdateEmail(
        dispatch,
        userId,
        token,
        newEmail,
        password,
        twitter_username
      )
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEmail)
