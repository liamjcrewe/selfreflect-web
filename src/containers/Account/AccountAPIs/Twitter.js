import { connect } from 'react-redux'

import Twitter from '../../../components/Account/AccountAPIs/Twitter'
import { submitUpdateTwitterUsername } from '../submitUpdate'
import { updateUser } from '../../../ducks/user'
import {
  updatePassword,
  updateTwitterUsername,
  updateIsLoading,
  updateIsSubmitted,
  updateSubmitError
} from '../../../ducks/twitter'

const mapStateToProps = state => {
  return {
    userId: state.user.id,
    token: state.token.value,
    email: state.user.email,
    password: state.twitter.password,
    twitter_username: state.twitter.twitter_username,
    isLoading: state.twitter.isLoading,
    isSubmitted: state.twitter.isSubmitted,
    submitError: state.twitter.submitError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updatePassword: password => dispatch(updatePassword(password)),
    updateTwitterUsername: twitter_username => {
      dispatch(updateTwitterUsername(twitter_username))
    },
    saveUsername: (userId, token, email, password, twitter_username) => {
      submitUpdateTwitterUsername(
        dispatch,
        userId,
        token,
        email,
        password,
        twitter_username
      )
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Twitter)
