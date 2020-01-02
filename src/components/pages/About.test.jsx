import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "../reducers";

import ReactGA from "react-ga";

import AboutContainer from "./AboutContainer";

let div = null;

beforeAll(() => {
  ReactGA.initialize(process.env.REACT_APP_GA_ID, {testMode: true});
});

beforeEach(() => {
  div = document.createElement("div");
});

afterEach(() => {
 ReactDOM.unmountComponentAtNode(div);
 div = null;
});

it('should create an About page', () => {
	ReactDOM.render(
		<Provider store={createStore(rootReducer)}>
			<Router>
				<AboutContainer />
			</Router>
		</Provider>
	,div);
});
