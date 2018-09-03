import { connect } from 'react-redux';
import Component from '../components/Answer';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const props = {
    activeGame: state.activeGame,
    uiState: state.uiState,
  };
  return props;
};

const Container = connect(
  mapStateToProps,
  actionCreators,
)(Component);

export default Container;