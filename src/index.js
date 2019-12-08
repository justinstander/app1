import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

import ReactGA from 'react-ga';

ReactGA.initialize(process.env.REACT_APP_GA_ID);

ReactDOM.render(<App />, document.getElementById('root'));

ReactGA.pageview('/');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
