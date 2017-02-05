import React, { PropTypes } from 'react'

import HomeInfo from './HomeInfo'
import HomeButtons from '../../containers/Home/HomeButtons'

const homeButtonsClass = "home-button button-primary"

const Home = ({ isLoggedIn }) => (
  <div className="home">
    <img src="images/reflect.jpg" className="u-full-width home-img" />
    <div className="container home-content-div">
      <HomeInfo />
      {isLoggedIn || <HomeButtons />}
    </div>
  </div>
)

Home.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

export default Home
