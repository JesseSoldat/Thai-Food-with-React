import {combineReducers} from 'redux';
import foodReducer from './food.reducer';

const rootReducer = combineReducers({
	food: foodReducer
});

export default rootReducer;