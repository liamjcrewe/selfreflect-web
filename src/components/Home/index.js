import React, { PropTypes } from 'react'

import HomeInfo from './HomeInfo'

const homeButtonsClass = "home-button button-primary"

const Home = ({ isLoggedIn, onLoginClick, onRegisterClick }) => (
  <div className="home">
    <img src="images/reflect.jpg" className="u-full-width home-img" />
    <div className="container home-content-div">
      <HomeInfo />

      {isLoggedIn || (
        <div className="home-buttons-div">
          <button className={homeButtonsClass} onClick={onLoginClick}>
            Log in
          </button>

          <button className={homeButtonsClass} onClick={onRegisterClick}>
            Register
          </button>
        </div>
      )}
    </div>
  </div>
)

Home.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onLoginClick: PropTypes.func.isRequired,
  onRegisterClick: PropTypes.func.isRequired
}

export default Home
