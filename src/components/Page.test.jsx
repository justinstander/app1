import React from "react";
import ReactDOM from "react-dom";

import ReactGA from "react-ga";

import Page from "./Page";

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

it("should create a page without a location", () => {
	const originalError = console.error;
  	console.error = jest.fn();

	const page = <Page />;

	expect(() => {
		ReactDOM.render(page, div);
	}).toThrow(TypeError);

	console.error = originalError;
});

it("should create a page with a location", () => {
	const pageWithLocation = <Page location={{pathname:"/page"}} />;

	expect(() => {
		ReactDOM.render(pageWithLocation, div);
	}).not.toThrow(TypeError);
});