import React, { PropTypes } from 'react'

const HomeButtons = ({ onLoginClick, onRegisterClick }) => (
  <div className="home-buttons-div">
    <button className="home-button button-primary" onClick={onLoginClick}>
      Log in
    </button>

    <button className="home-button button-primary" onClick={onRegisterClick}>
      Register
    </button>
  </div>
)

HomeButtons.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  onRegisterClick: PropTypes.func.isRequired
}

export default HomeButtons
