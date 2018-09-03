import { connect } from 'react-redux';
import Component from '../components/Select';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const props = {
    activeGame: state.activeGame,
  };
  return props;
};

const Container = connect(
  mapStateToProps,
  actionCreators,
)(Component);

export default Container;