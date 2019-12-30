import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomeComponent from "./components/HomeContainer";

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/about">
            <div>About</div>
          </Route>
          <Route path="/schedules">
            <div>Schedules</div>
          </Route>
          <Route path="/settings">
            <div>Settings</div>
          </Route>
          <Route path="/">
            <HomeComponent />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
