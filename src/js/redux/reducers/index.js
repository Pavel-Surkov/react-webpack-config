import createReducer from './createReducer';
import farmReducer from './farmReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	create: createReducer,
	farm: farmReducer
});

export default rootReducer;
