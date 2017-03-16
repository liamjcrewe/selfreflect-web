import { connect } from 'react-redux'

import { updateAverageWellbeingPerDay } from '../../../ducks/analysis'
import Wellbeing from '../../../components/Analysis/Sources/Wellbeing'

const mapStateToProps = state => {
  return {
    isSelected: state.analysis.sources.averageWellbeingPerDay
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateIsSelected: isSelected => dispatch(
      updateAverageWellbeingPerDay(isSelected)
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wellbeing)
