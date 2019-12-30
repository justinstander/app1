import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Menu } from "./components/Menu";

import HomeContainer from "./components/HomeContainer";
import AboutContainer from "./components/AboutContainer";

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Menu />
        <Switch>
          <Route path="/about">
            <AboutContainer />
          </Route>
          <Route path="/schedules">
          </Route>
          <Route path="/settings">
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
