import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import PlaceHolderComponent from "./components/PlaceHolderContainer";

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <PlaceHolderComponent />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
