import React, { PropTypes } from 'react'

const MyReactComponent = ({ myProp, myEventHandlerProp }) => (
  <div>
    <button onClick={ () => myEventHandlerProp() }>+1</button>
    <span> Count: { myProp }</span>
  </div>
)

MyReactComponent.propTypes = {
  myProp: PropTypes.number.isRequired,
  myEventHandlerProp: PropTypes.func.isRequired
}

export default MyReactComponent
