import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
	<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
