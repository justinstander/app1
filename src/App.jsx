import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Helmet} from "react-helmet";

import PlaceHolder from './components/PlaceHolder';

import './App.css';

const App = () => {
  return (
    <Router>
      <Helmet>
        <title>My Title</title>
        <link rel="canonical" href="https://haasandmilan/" />
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Switch>
        <Route path="/">
          <PlaceHolder />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
