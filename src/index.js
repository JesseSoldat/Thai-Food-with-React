import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';

import NavBar from './components/navbar';
import Dashboard from './components/dashboard';
import Dishes from './components/dishes';
import Dish from './components/dish';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
	<BrowserRouter>
		<div>
			<NavBar/>
			<Switch>
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/dishes/:id" component={Dishes}/>
				<Route path="/dish/:cat/:id" component={Dish} />
				<Route path="/" component={Dashboard} />
			</Switch>
		</div>
	</BrowserRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
