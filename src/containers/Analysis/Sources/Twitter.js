import { connect } from 'react-redux'

import { updateNumTweetsPerDay } from '../../../ducks/analysis'
import Twitter from '../../../components/Analysis/Sources/Twitter'

const mapStateToProps = state => {
  return {
    isSelected: state.analysis.sources.numTweetsPerDay
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateIsSelected: isSelected => dispatch(
      updateNumTweetsPerDay(isSelected)
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Twitter)
