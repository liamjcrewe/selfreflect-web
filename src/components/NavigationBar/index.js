import React, { PropTypes } from 'react'
import { map, equals } from 'ramda'

const getTab = (selectedTab, updateSelectedTab, logout) => tab => (
  <button
    key={tab.name}
    className={
      'nav-button ' +
      (tab.name === selectedTab ? 'button-primary' : 'nav-button-unselected')
    }
    onClick={
      tab.name === 'logout'
        ? () => logout()
        : () => updateSelectedTab(tab.name)
    }
  >
    {tab.label}
  </button>
)

const NavigationBar = ({ tabs, selectedTab, updateSelectedTab, logout }) => (
  <div className="row nav-bar-div">
    <div className="twelve columns nav-bar">
      <div
        className="two columns logo-div"
        onClick={() => updateSelectedTab('home')}
      >
        <div className="logo"></div>
      </div>
        {map(getTab(selectedTab, updateSelectedTab, logout), tabs)}
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
  updateSelectedTab: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}

export default NavigationBar
