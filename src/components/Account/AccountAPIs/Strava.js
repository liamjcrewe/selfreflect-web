import React, { PropTypes } from 'react'
import { authURL, clientId, redirectUri } from '../../../../config/strava'

const onClickConnect = userId => () => {
  window.open(authURL +
    '?client_id=' + clientId +
    '&state=' + userId +
    '&response_type=code' +
    '&redirect_uri=' + redirectUri
  )
}

const Strava = ({ userId }) => {
  return (
    <div className="api-connect-div strava-div">
      <div className="api-connect-title strava-title">Strava</div>

      <div className="strava-content-div">
        <button className="button-primary" onClick={onClickConnect(userId)}>
          Connect Strava
        </button>
      </div>
    </div>
  )
}

Strava.propTypes = {
  userId: PropTypes.number.isRequired
}

export default Strava
