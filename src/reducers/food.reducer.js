import initialState from '../data/all.json';

export default function(state = initialState, action) {
	switch(action.type) {
		default: 
			console.log(state);
			return state;
	}
}