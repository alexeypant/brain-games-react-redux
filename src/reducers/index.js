import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
// import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const activeGame = handleActions({
  [actions.selectGame](state, { payload: { gameName } }) {
    return gameName;
  },
}, '');

const task = handleActions({
  [actions.updateTask](state, { payload: { task } }) {
    return task;
  },
}, {});

const answer = handleActions({
  [actions.submitAnswer](state, { payload: { answer } }) {
    return answer;
  },
}, '');

const uiState = handleActions({
  [actions.updateUIState](state, { payload: { uiState } }) {
    return uiState;
  },
}, '');

export default combineReducers({
  // form: formReducer,
  activeGame,
  task,
  answer,
  uiState,
});