import { connect } from 'react-redux'

import { updateTimeExercisedPerDay } from '../../../ducks/analysis'
import Strava from '../../../components/Analysis/Sources/Strava'

const mapStateToProps = state => {
  return {
    isSelected: state.analysis.sources.timeExercisedPerDay
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateIsSelected: isSelected => dispatch(
      updateTimeExercisedPerDay(isSelected)
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Strava)
