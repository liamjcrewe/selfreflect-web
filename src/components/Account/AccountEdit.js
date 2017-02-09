import React, { PropTypes } from 'react'

// import EditEmail from '../../containers/Account/EditEmail'
// import EditPassword from '../../containers/Account/EditPassword'
// import ViewAccount from '../../containers/Account/ViewAccount'

const getTab = selectedEditTab => {
  return <div></div>

  // switch (selectedEditTab) {
  //   case 'email':
  //     return <EditEmail />
  //   case 'password':
  //     return <EditPassword />
  //   default:
  //     return <ViewAccount />
  // }
}

const AccountEdit = ({ selectedEditTab, updateSelectedEditTab }) => {
  return (
    <div>
      <div className="account-title-div">
        <div className="account-title">Account management</div>
      </div>
      <div className="account-buttons-div">
        <button
          className={
            selectedEditTab === ''
              ? 'button-primary'
              : 'account-button-unselected'
          }
          onClick={() => updateSelectedEditTab('')}
        >
          View account
        </button>

        <button
          className={
            selectedEditTab === 'email'
              ? 'button-primary'
              : 'account-button-unselected'
          }
          onClick={() => updateSelectedEditTab('email')}
        >
          Edit email
        </button>

        <button
          className={
            selectedEditTab === 'password'
              ? 'button-primary'
              : 'account-button-unselected'
          }
          onClick={() => updateSelectedEditTab('password')}
        >
          Edit password
        </button>

      </div>
      {getTab(selectedEditTab)}
    </div>
  )
}

AccountEdit.propTypes = {
  selectedEditTab: PropTypes.string.isRequired,
  updateSelectedEditTab: PropTypes.func.isRequired
}

export default AccountEdit
