import React from "react";
import ReactDOM from "react-dom";

import ReactGA from "react-ga";

import Page from "./Page";

let div = null;
let props = null;

beforeAll(() => {
  ReactGA.initialize(process.env.REACT_APP_GA_ID, {testMode: true});
  props = {
  	location: {
  		pathname: "/Page"
  	}
  };
});

beforeEach(() => {
  div = document.createElement("div");
});

afterEach(() => {
 ReactDOM.unmountComponentAtNode(div);
 div = null;
});

it("should throw TypeError on a page without a location (without router)", () => {
	const originalError = console.error;
  	console.error = () => {};

	const page = <Page />;

	expect(() => {
		ReactDOM.render(page, div);
	}).toThrow(TypeError);

	console.error = originalError;
});

it("should create a page with a location (with router)", () => {
	const pageWithLocation = <Page {...props} />;

	expect(() => {
		ReactDOM.render(pageWithLocation, div);
	}).not.toThrow(TypeError);
});