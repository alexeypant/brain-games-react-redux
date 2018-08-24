import { connect } from 'react-redux';
import App from '../components/App.jsx';

const mapStateToProps = ({ tasks, newTaskText }) => {
  const props = { tasks, newTaskText };
  return props;
};

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
