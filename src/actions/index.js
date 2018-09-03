import { createAction } from 'redux-actions';

export const selectGame = createAction('GAME_ACTIVE_SET');
export const updateTask = createAction('GAME_TASK_SET');
export const submitAnswer = createAction('ANSWER_SUBMIT');
export const updateUIState = createAction('UI_STATE_UPDATE');