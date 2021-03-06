import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import store from "../../../store";
import ReactGA from "react-ga";

import { Chat } from "../../../components/pages";

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

it("should create Chat page", () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Chat />
      </Router>
    </Provider>
  , div);
});
