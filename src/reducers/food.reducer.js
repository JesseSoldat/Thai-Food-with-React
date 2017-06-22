// import initialState from '../data/all.json';
import {FETCH_DISHES} from '../actions/types';
import size from 'lodash/size'
import map from 'lodash/map'

let initialState = {};

export default function(state = initialState, action) {
	switch(action.type) {
		case FETCH_DISHES:

			let dishGT5 = {};  
			map(action.payload, (dish, i) => {
				let s = size(dish);

				if (s <= 5) return null;
				dishGT5[i] = dish;
			});
			console.log(dishGT5);
			return { ...state, ...dishGT5};
		default: 
			return state;
	}
}