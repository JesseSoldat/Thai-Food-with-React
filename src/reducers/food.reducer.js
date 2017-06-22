// import initialState from '../data/all.json';
import {FETCH_DISHES} from '../actions/types';
let initialState = {};

export default function(state = initialState, action) {
	switch(action.type) {
		case FETCH_DISHES:
			console.log('FETCHING DISHES');
			return { ...state, ...action.payload};
		default: 
			return state;
	}
}