import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import ReactGA from 'react-ga';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactGA.initialize(process.env.REACT_APP_GA_ID);

const store = createStore(rootReducer);  

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

ReactGA.pageview('/');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
