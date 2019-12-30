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
