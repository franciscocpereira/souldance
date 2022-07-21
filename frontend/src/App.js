import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import './App.css';
import "./styles/styles.scss";
import Main from './components/Main/Main';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
