import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {
  HomeContainer,
  AboutContainer,
  SearchContainer
} from "./components/pages";

import { Menu } from "./components/Menu";

/**
 * Application
 */
export default () => (
  <Router>
    <Menu />
    <Switch>
      <Route path="/search">
        <SearchContainer />
      </Route>
      <Route path="/about">
        <AboutContainer />
      </Route>
      <Route path="/">
        <HomeContainer />
      </Route>
    </Switch>
  </Router>
);
