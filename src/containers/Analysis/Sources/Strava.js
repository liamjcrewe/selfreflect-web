import { connect } from 'react-redux'

import { updateDistanceExercisedPerDay } from '../../../ducks/analysis'
import Strava from '../../../components/Analysis/Sources/Strava'

const mapStateToProps = state => {
  return {
    isSelected: state.analysis.sources.distanceExercisedPerDay
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateIsSelected: isSelected => dispatch(
      updateDistanceExercisedPerDay(isSelected)
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Strava)
