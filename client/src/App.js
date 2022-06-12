import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Documentation from './Documentation';
import Geom from './Geom';

function App() {
  const author = process.env.REACT_APP_PROJECT_AUTHOR;

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Zadanie 2 - Technologie Chmurowe</p>
          {
            author ? (
              <p>Autor: {author}</p>
            ) : (null)
          }
          <Link to="/geom">GS Calc</Link>
          <Link to="/documentation">Dokumentacja</Link>
        </header>
        <div>
          <Route path="/geom" component={Geom} />
          <Route path="/documentation" component={Documentation} />
        </div>
      </div>
    </Router>
  );
}

export default App;
