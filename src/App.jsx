import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Menu } from "./components/Menu";

import { HomeContainer } from "./components/pages/home";
import AboutContainer from "./components/pages/AboutContainer";
import SearchContainer from "./components/pages/SearchContainer";

class App extends React.PureComponent {
  render() {
    return (
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
  }
}

export default App;
