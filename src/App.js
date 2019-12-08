import React from 'react';

import './App.css';

import Jumbotron from 'react-bootstrap/Jumbotron';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Jumbotron className="Jumbotron">
          <div className="Jumbotron-text">
            <h1>Coming Soon</h1>
            <h2>The Greatest Advertising Agency Ever</h2>
          </div>
        </Jumbotron>
      </header>
    </div>
  );
}

export default App;
