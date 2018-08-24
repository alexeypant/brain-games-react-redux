import { connect } from 'react-redux';
import Component from '../components/TasksList';
import * as actionCreators from '../actions';

const Container = connect(
    ({ tasks }) => {
      const props = {
        tasks: Object.values(tasks),
      };
      return props;
    },
    actionCreators,
  )(Component);
  
  export default Container;