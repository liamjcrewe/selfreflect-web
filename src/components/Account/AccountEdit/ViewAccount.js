import React, { PropTypes } from 'react'

const ViewAccount = ({ email }) => (
  <div>
    <div className="row view-account-div">
      <div className="six columns view-account-left">Email:</div>
      <div className="six columns view-account-right">{email}</div>
    </div>
  </div>
)

ViewAccount.propTypes = {
  email: PropTypes.string.isRequired
}

export default ViewAccount
