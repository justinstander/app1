import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {
  Home,
  About,
  Search,
  Chat
} from "./components/pages";

import { Menu } from "./components/Menu";

/**
 * Application
 */
export default () => (
  <Router>
    <Menu />
    <Switch>
      <Route path="/chat">
        <Chat />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);
