import { connect } from 'react-redux'
import { filter } from 'ramda'

import Graph from '../../components/Analysis/Graph'

const mapStateToProps = state => {
  return {
    isSubmitted: state.analysis.isSubmitted,
    isLoading: state.analysis.isLoading,
    sources: filter(source => source === true, state.analysis.sources),
    data: state.analysis.data
  }
}

export default connect(
  mapStateToProps
)(Graph)
