import React from "react";
import ReactDOM from "react-dom";

import ReactGA from "react-ga";

import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./reducers";

import App from "./App";

it("renders without crashing", () => {
	const div = document.createElement("div");

	ReactGA.initialize(process.env.REACT_APP_GA_ID, {testMode: true});
	
	ReactDOM.render(
		<Provider store={createStore(rootReducer)}>
			<App />
		</Provider>,
		div
	);

	ReactDOM.unmountComponentAtNode(div);
});
