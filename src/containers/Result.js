import { connect } from 'react-redux';
import Component from '../components/Result';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const props = {
    task: state.task,
    answer: state.answer,
    uiState: state.uiState,
  };
  return props;
};

const Container = connect(
  mapStateToProps,
  actionCreators,
)(Component);

export default Container;