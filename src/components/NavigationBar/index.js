import React, { PropTypes } from 'react'
import { map } from 'ramda'

import Logo from './Logo'

const getTabClass = (tabName, selectedTab) => {
  if (tabName === selectedTab) {
    return 'nav-button button-primary'
  }

  if (tabName === 'logout') {
    return 'nav-button nav-button-unselected button-logout'
  }

  return 'nav-button nav-button-unselected'
}

const getTab = (selectedTab, setSelectedTab, logout) => tab => {
  const onClick = tab.name === 'logout'
    ? logout
    : () => setSelectedTab(tab.name)

  return (
    <button
      key={tab.name}
      className={getTabClass(tab.name, selectedTab)}
      onClick={onClick}
    >
      {tab.label}
    </button>
  )
}

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
      {map(getTab(selectedTab, setSelectedTab, logout), tabs)}
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