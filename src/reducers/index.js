import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import taskReducer from './task';
import uiReducer from './ui';
import modalReducer from './modal';

const rootReducer = combineReducers({
  task: taskReducer,
  ui: uiReducer,
  modal: modalReducer,
  form: formReducer,
});

export default rootReducer;
