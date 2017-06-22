import firebase from 'firebase';
import { FETCH_DISHES} from './types';

import config from '../firebase.config';

firebase.initializeApp(config);

let DishesDB = firebase.database().ref('thai/dishes');


export function fetchDishes() {
	return dispatch => {
		DishesDB.on('value', snapshot => {
			dispatch({
				type: FETCH_DISHES,
				payload: snapshot.val()
			});
		});
	};
}