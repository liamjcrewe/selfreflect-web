import React, { PropTypes } from 'react'
import { map, equals } from 'ramda'

const logout = {
  name: 'logout',
  label: 'Log out'
}

const getTab = (selectedTab, updateSelectedTab) => tab => (
  <button
    key={tab.name}
    className={
      'nav-button ' +
      (tab.name === selectedTab ? 'button-primary' : 'nav-button-unselected')
    }
    onClick={
      equals(tab, logout)
      ? () => console.log('logout')
      : () => updateSelectedTab(tab.name)
    }
  >
    {tab.label}
  </button>
)

const getTabs = (tabs, selectedTab, updateSelectedTab) => {
  return (
    <div className="twelve columns nav-bar">
      <div
        className="two columns logoDiv"
        onClick={() => updateSelectedTab('home')}
      >
        <div className="logo"></div>
      </div>
      {map(getTab(selectedTab, updateSelectedTab), tabs)}
    </div>
  )
}

const NavigationBar = ({ tabs, selectedTab, updateSelectedTab }) => (
  <div className="row">
    {getTabs(tabs, selectedTab, updateSelectedTab)}
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
  updateSelectedTab: PropTypes.func.isRequired
}

export default NavigationBar
