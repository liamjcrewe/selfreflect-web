import { connect } from 'react-redux'

import Twitter from '../../../components/Account/AccountAPIs/Twitter'
import { submitUpdateTwitterUsername } from '../submitUpdate'
import { updateUser } from '../../../ducks/user'
import {
  updateUsername,
  updateIsLoading,
  updateIsSubmitted,
  updateSubmitError
} from '../../../ducks/twitter'

const mapStateToProps = state => {
  return {
    userId: state.user.id,
    token: state.token.value,
    username: state.twitter.username,
    isLoading: state.twitter.isLoading,
    isSubmitted: state.twitter.isSubmitted,
    submitError: state.twitter.submitError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUsername: username => dispatch(updateUsername(username)),
    saveUsername: (userId, token, username) => {
      submitUpdateTwitterUsername(dispatch, userId, token, username)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Twitter)
