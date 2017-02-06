import React, { PropTypes } from 'react'
import { map } from 'ramda'

import Logo from './Logo'
import Tab from './Tab'

const NavigationBar = ({
  tabs,
  selectedTab,
  onLogoClick,
  setSelectedTab,
  logout
}) => (
  <div className="row nav-bar-div">
    <div className="twelve columns nav-bar">
      <Logo onClick={onLogoClick} />
      {map(tab => (
        <Tab
          key={tab.name}
          name={tab.name}
          label={tab.label}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          logout={logout}
        />
      ), tabs)}
    </div>
  </div>
)

NavigationBar.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  selectedTab: PropTypes.string.isRequired,
  onLogoClick: PropTypes.func.isRequired,
  setSelectedTab: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}

export default NavigationBar
