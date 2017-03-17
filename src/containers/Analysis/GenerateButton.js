import { connect } from 'react-redux'

import GenerateButton from '../../components/Analysis/GenerateButton'

const mapStateToProps = state => {
  return {
    sources: state.analysis.sources
  }
}

const mapDispatchToProps = dispatch => {
  return {
    generateGraph: sources => {
      /* @TODO:
       *   - Fetch data
       *   - Process data to format required, including merging data from same
       *     dates
       *   - Update state to render graph
       */
      console.log(sources)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenerateButton)
