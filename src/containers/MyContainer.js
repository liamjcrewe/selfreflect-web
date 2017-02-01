import { connect } from 'react-redux'

import MyReactComponent from '../components/MyReactComponent'
import { myAction } from '../actions'

const getMyProp = myProp => {
  return myProp
}

const mapStateToProps = state => {
  return {
    myProp: getMyProp(state.myProp)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    myEventHandlerProp: () => {
      dispatch(myAction())
    }
  }
}

const MyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyReactComponent)

export default MyContainer
