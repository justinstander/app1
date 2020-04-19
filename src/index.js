import dotenv from 'dotenv'

import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import ReactGA from "react-ga";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/Root";

import App from "./App";

dotenv.config();
ReactGA.initialize(process.env.REACT_APP_GA_ID);

ReactDOM.render(
	<Provider store={createStore(rootReducer)}>
		<App />
	</Provider>,
	document.getElementById("root")
);
