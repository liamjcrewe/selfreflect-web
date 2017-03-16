import { connect } from 'react-redux'

import { updateAverageWellbeingPerDay } from '../../../ducks/analysis'
import SelfReflect from '../../../components/Analysis/Sources/SelfReflect'

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
)(SelfReflect)
