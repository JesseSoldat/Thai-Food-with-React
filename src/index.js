import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';

import Dishes from './components/dishes';
import registerServiceWorker from './registerServiceWorker';
import './index.css';



const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
	<Dishes />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
