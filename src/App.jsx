import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import PlaceHolder from './components/PlaceHolder';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <PlaceHolder />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
