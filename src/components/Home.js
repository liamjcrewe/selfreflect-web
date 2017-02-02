import React, { PropTypes } from 'react'

const backgroundImage = (
  <img
    src="images/reflect.jpg"
    className="u-full-width home-img"
  />
)

const infoText = (
  <div className="home-info-text">
    SelfReflect is an application designed to allow users to investigate the relationships between their mental wellbeing and various data that is already being collected about them.
    <br /><br />
    This data includes social media activity from applications such as Twitter, music listening habits from applications such as last.fm and exercise tracking data from applications such as Strava.
    <br /><br />
    This project was developed as part of a final year BSc Computer Science degree at the University of Bath.
  </div>
)

const loginButton = updateSelectedTab => (
  <button
    className="home-button button-primary"
    onClick={() => updateSelectedTab('login')}
  >
    Log in
  </button>
)

const registerButton = updateSelectedTab => (
  <button
    className="home-button button-primary"
    onClick={() => updateSelectedTab('register')}
  >
    Register
  </button>
)

const Home = ({ updateSelectedTab }) => (
  <div className="home">
    {backgroundImage}
    <div className="container home-content-div">
      {infoText}
      <div className="home-buttons-div">
        {loginButton(updateSelectedTab)}
        {registerButton(updateSelectedTab)}
      </div>
    </div>
  </div>
)

Home.propTypes = {
  updateSelectedTab: PropTypes.func.isRequired
}

export default Home
