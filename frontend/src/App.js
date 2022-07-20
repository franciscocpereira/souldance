import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import './App.css';
import "./styles/styles.scss";
import Main from './components/Main/Main';


function App() {
  return (
    <div className="App">
      <Router>
        <Main />
      </Router>
    </div>
  );
}

export default App;
