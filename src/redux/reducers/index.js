import { combineReducers } from 'redux';
import toDos from './toDos';

const rootReducer = combineReducers({
  toDos
});

export default rootReducer;
