import React from "react";
import ReactDOM from "react-dom";

import ReactGA from "react-ga";

import Page from "../../../components/pages/Page";

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

it("should create a page with a location (with router)", () => {
  const pageWithLocation = <Page {...props} />;

  expect(() => {
    ReactDOM.render(pageWithLocation, div);
  }).not.toThrow(TypeError);
});