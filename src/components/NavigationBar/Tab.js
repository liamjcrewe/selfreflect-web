import React, { PropTypes } from 'react'

const getTabClass = (tabName, selectedTab) => {
  if (tabName === selectedTab) {
    return 'nav-button button-primary'
  }

  if (tabName === 'logout') {
    return 'nav-button nav-button-unselected button-logout'
  }

  return 'nav-button nav-button-unselected'
}

const Tab = ({ selectedTab, setSelectedTab, logout, name, label }) => {
  const onClick = name === 'logout'
    ? logout
    : () => setSelectedTab(name)

  return (
    <button
      className={getTabClass(name, selectedTab)}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  setSelectedTab: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}

export default Tab
