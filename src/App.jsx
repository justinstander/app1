import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Menu } from "./components/Menu";

import HomeContainer from "./components/pages/HomeContainer";
import SettingsContainer from "./components/pages/SettingsContainer";
import SearchContainer from "./components/pages/SearchContainer";
import SchedulesContainer from "./components/pages/ScheduleContainer";

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Menu />
        <Switch>
          <Route path="/search">
            <SearchContainer />
          </Route>
          <Route path="/schedules">
            <SchedulesContainer />
          </Route>
          <Route path="/settings">
            <SettingsContainer />
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
